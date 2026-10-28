import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || 'NextJS-Client';

    // 1. Forward directly to Express backend
    try {
      const backendResponse = await fetch(`${BACKEND_URL}/api/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': clientIp,
          'user-agent': userAgent,
        },
        body: JSON.stringify(body),
      });

      const data = await backendResponse.json();
      return NextResponse.json(data, { status: backendResponse.status });
    } catch (backendError: any) {
      console.warn('[NEXT PROXY] Express backend unreachable, attempting local fallback:', backendError.message);
      
      // Return clear error if Express backend is down
      return NextResponse.json(
        {
          success: false,
          error: 'Backend service is temporarily unavailable. Please try again or call us directly at +91 9224136478.',
        },
        { status: 503 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Invalid enquiry payload.' },
      { status: 400 }
    );
  }
}
