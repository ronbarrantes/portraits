import { sql } from '@vercel/postgres'

import { db, ImageTable, ImageTableType } from '@/db/schema'

export async function init() {
  // Create table with raw SQL
  const createTable = await sql`
  CREATE TABLE IF NOT EXISTS "images" (
    "id" serial PRIMARY KEY NOT NULL,
    "user" text NOT NULL,
    "imgUrl" text NOT NULL,
    "imgUrlSmall" text NOT NULL,
    "createdAt" timestamp DEFAULT now()
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
    "imgUrl" text NOT NULL,
    "imgUrlSmall" text NOT NULL,
    "createdAt" timestamp DEFAULT now()
  );`

  console.log(`Created "images" table`)

  const createImages: ImageTableType[] = await db
    .insert(ImageTable)
    .values([
      {
        imgUrl: 'https://ronb.co',
        imgUrlSmall: 'https://ronb.co',
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
