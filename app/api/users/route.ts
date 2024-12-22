
import userModel from "@/models/userModel";
import connectDB from "@/config/database";
import bcrypt from 'bcrypt';


export async function GET() {

  try{
    await connectDB()
    const users = await userModel.find()
    console.log(users)
    return new Response(JSON.stringify(users), {status: 200, headers: {'Content-Type': 'application/json'}});
  }catch(error){
    console.log(`Error: ${error}`)
    process.exit(1)
  }


}

export async function POST(request: Request) {
  try{
    await connectDB()
    const {name, email, password, role} = await request.json()
    const user = await userModel.create({name, email, password, role})
    return new Response(JSON.stringify(user), {status: 201, headers: {'Content-Type': 'application/json'}})
  }catch(error){
    console.log(`Error: ${error}`)
    process.exit(1)
  }
}




export async function PUT(request: Request) {
  try {
    await connectDB();
    const { id, name, email, password, role } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
    }
    const updates:{
      name?: string,
      email?: string,
      password?: string,
      role?: string
    } = {};
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (password) {
     
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(password, salt);
    }
    if (role) updates.role = role;
    if (Object.keys(updates).length === 0) {
      return new Response(JSON.stringify({ error: 'No updates provided' }), { status: 400 });
    }

    
    const updatedUser = await userModel.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedUser) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    
    return new Response(JSON.stringify({ message: 'User updated successfully', user: updatedUser }), { status: 200 });
  } catch (error) {
    console.error(`Error: ${error}`);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
