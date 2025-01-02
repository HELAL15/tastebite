import bcrypt  from 'bcrypt';
import connectDB from "@/config/db";
import userModel from "@/models/user.model";
import jwt from "jsonwebtoken";




export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json(); 
    if (!email || !password) {
      return Response.json({ success: false, message: 'required credentials' }, { status: 400 });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return Response.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return Response.json({ success: false, message: 'Invalid credentials' }, { status: 400 });
    }


    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "7d" }
    );


    const userData = {
      name:user.name,
      email:user.email,
      role:user.role,
      avatar:user.avatar,
      token
    }


    return Response.json({ success: true, message: 'Login successful' , userData:userData }, { status: 200 });

  } catch (error) {
    return Response.json({ success: false, message: 'An error occurred' , error:error }, { status: 500 });
  }
}
