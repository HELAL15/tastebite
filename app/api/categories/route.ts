import { client } from '@/lib/mongodb';
import { NextResponse } from 'next/server';


// export async function GET() {
//   const data = { message: 'Hello from Categories API' };
//   return NextResponse.json(data);
// }
export async function GET() {
  try {
    // Connect to the database
    await client.connect();

    
    const db = client.db('tastebite'); 
    const categoriesCollection = db.collection('categories');

    
    const categories = await categoriesCollection.find({}).toArray();

  
    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: 'Data received', data: body });
}
// 1ahmedhelal1
// 2qtBgaxXVnMPd505




