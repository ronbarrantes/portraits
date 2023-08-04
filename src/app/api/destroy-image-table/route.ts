import { NextResponse } from 'next/server'

import { sql } from '@vercel/postgres'

export async function GET(request: Request) {
  try {
    const result = await sql`
      DROP TABLE "images";`
    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
