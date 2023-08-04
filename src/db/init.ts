import { sql } from '@vercel/postgres'

import { db, ImageTable, ImageTableType } from '@/db/schema'

export async function init() {
  // Create table with raw SQL

  const createTable = await sql`
  CREATE TABLE IF NOT EXISTS "images" (
    "id" serial PRIMARY KEY NOT NULL,
    "user" text NOT NULL,
    "url" text NOT NULL,
    "created_at" timestamp DEFAULT now()
  );`

  console.log(`Created "images" table`)

  return {
    createTable,
  }
}

// NOT USED ANYWHERE RIGHT NOW
export async function seed() {
  // Create table with raw SQL

  const createTable = await sql`
  CREATE TABLE IF NOT EXISTS "images" (
    "id" serial PRIMARY KEY NOT NULL,
    "user" text NOT NULL,
    "url" text NOT NULL,
    "created_at" timestamp DEFAULT now()
  );`

  console.log(`Created "images" table`)

  const createImages: ImageTableType[] = await db
    .insert(ImageTable)
    .values([
      {
        url: 'https://ronb.co',
        user: 'ronb',
      },
    ])
    .returning()
  console.log(`Seeded ${createImages.length} images`)

  return {
    createTable,
    createImages,
  }
}
