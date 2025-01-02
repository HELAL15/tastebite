import jwt from 'jsonwebtoken';
import connectDB from "@/config/db";
import userModel from '@/models/user.model';

export async function GET(req: Request) {
  try {
    await connectDB();

    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    const secretKey = process.env.JWT_SECRET_KEY;
    if(!secretKey) {
      return 
    }
    const decoded = jwt.verify(token, secretKey);

    const users = await userModel.find()

    const usersWithoutPasswords = users.map(user => {
      const {name , email , avatar , role , _id} = user
      const userWithoutPassword = {
      id:_id,
      name:name,
      email:email,
      avatar:avatar,
      role:role
      }
      return userWithoutPassword;
    })


    if(decoded) {
      return Response.json({success:true, message:'all users' , data:usersWithoutPasswords},{status:200})
    }

  } 
  catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return Response.json({success:false , message:'token has expired'},{status:401})
    }
    return Response.json({ success: false, message: "An error occurred", error }, { status: 500 });
  }
}
