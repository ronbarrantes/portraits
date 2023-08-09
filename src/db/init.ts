import { sql } from '@vercel/postgres'

import { db, Image, ImageTable } from '@/db/schema'

export async function init() {
  // Create table with raw SQL
  const createTable = await sql`
  CREATE TABLE IF NOT EXISTS "images" (
    "id" serial PRIMARY KEY NOT NULL,
    "user" text NOT NULL,
    "key" text NOT NULL,
    "keySmall" text NOT NULL,
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
    "key" text NOT NULL,
    "keySmall" text NOT NULL,
    "createdAt" timestamp DEFAULT now()
  );`

  console.log(`Created "images" table`)

  const createImages: Image[] = await db
    .insert(ImageTable)
    .values([
      {
        key: 'https://ronb.co',
        keySmall: 'https://ronb.co',
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
