import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received data:', body);

    const { email, userGroup, ...fields } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.LOOPS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: 'Loops API key not found' },
        { status: 500 }
      );
    }

    const loopsData = {
      email,
      userGroup: userGroup || undefined,
      ...fields
    };

    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loopsData)
    });

    if (response.ok) {
      console.log('Loops API response:', await response.text()); // Log raw response
      return NextResponse.json({ success: true });
    } else {
      console.error('Loops API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error details:', errorText);

      if (errorText.includes('already exists')) {
        return NextResponse.json(
          { success: false, message: 'This email is already subscribed' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to subscribe. Please try again later.',
          error: errorText
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Request processing error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Invalid request format',
        error: error.message 
      },
      { status: 400 }
    );
  }
} 