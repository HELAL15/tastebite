
import connectDB from '@/config/database';
import categoryModel from '@/models/categoryModel';
import { NextResponse } from 'next/server';


export async function GET() {
  try{
    await connectDB()
    const cats = await categoryModel.find()
    return  NextResponse.json({data:cats , message:'all categories'}, {status: 200});
  }catch(error){
    return NextResponse.json({ message: 'error ecoured', data: error }, { status: 500 })
  }
}



export async function POST(req: Request) {
  try{
    await connectDB()
    const {title, image} = await req.json()
    const cat = await categoryModel.create({title,image})
    return new Response( JSON.stringify(cat), {status: 201, headers: {'Content-Type': 'application/json'}})
  }catch(error){
    return NextResponse.json({ message: 'error ecoured', data: error })
  }

}
// 1ahmedhelal1
// 2qtBgaxXVnMPd505




