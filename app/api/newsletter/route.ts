import { LoopsClient } from "loops";
import { NextResponse } from "next/server";

const loops = new LoopsClient(process.env.LOOPS_API_KEY!);

export async function POST(request: Request) {
  try {
    const { email, userGroup, ...fields } = await request.json();

    // Create contact in Loops
    await loops.createContact({
      email,
      userGroup,
      ...fields
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Loops API Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
} 