import { NextResponse } from 'next/server'

import { sql } from '@vercel/postgres'

export async function GET(request: Request) {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS "images" (
        "id" serial PRIMARY KEY NOT NULL,
        "user" text NOT NULL,
        "url" text NOT NULL,
        "created_at" timestamp DEFAULT now()
      );`
    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
