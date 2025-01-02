
import connectDB from "@/config/db";
import userModel from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import gravatar from "gravatar";


export async function POST(req: Request) {
  try {
    await connectDB();
    const { name , email, password , role='user'  } = await req.json(); 
    if (!email || !password || !name) {
      return Response.json({ success: false, message: 'Invalid request format' }, { status: 400 });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);


    const isUserExist = await userModel.findOne({email})
    if(isUserExist){
      return Response.json({ success: false, message: 'User already exist' }, { status: 400 });
    }

    const avatar = gravatar.url(email, { s: "200", d: "identicon" }, true);

    const user = await userModel.create({name,email,password:encryptedPassword,role,avatar:avatar})


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

    return Response.json({ success: true, message: 'registered successful' , userData:userData }, { status: 200 });

  } catch (error) {
    return Response.json({ success: false, message: 'An error occurred' , error:error }, { status: 500 });
  }
}
