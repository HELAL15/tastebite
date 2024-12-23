
import connectDB from '@/config/database';
import categoryModel from '@/models/categoryModel';



export async function GET() {
  try{
    await connectDB()
    const cats = await categoryModel.find()
    return  Response.json({data:cats , message:'all categories'}, {status: 200});
  }catch(error){
    return Response.json({ message: 'error ecoured', data: error }, { status: 500 })
  }
}



export async function POST(req: Request) {
  try{
    await connectDB()
    const {title, image} = await req.json()
    const cat = await categoryModel.create({title,image})
    return  Response.json( {data:JSON.stringify(cat)}, {status: 201})
  }catch(error){
    return Response.json({ message: 'error ecoured', data: error })
  }

}
// 1ahmedhelal1
// 2qtBgaxXVnMPd505




