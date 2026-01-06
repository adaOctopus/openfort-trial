import { NextResponse } from 'next/server';
import openfort from '@/lib/openfortAdminConfig';

export async function POST() {
  try {
    
    const session = await openfort.registerRecoverySession(
      process.env.SHIELD_PUBLISHABLE_KEY || "",
      process.env.SHIELD_SECRET_KEY || "",
      process.env.SHIELD_ENCRYPTION_SHARE || ""
    );
    
    return NextResponse.json({
      session: session
    });
  } catch (error) {
    console.error('Error creating session:', error);
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 }
    );
  }
}

