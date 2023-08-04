import { sql } from '@vercel/postgres'
import { InferModel } from 'drizzle-orm'
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'
import { drizzle } from 'drizzle-orm/vercel-postgres'

export const ImageTable = pgTable('images', {
  id: serial('id').primaryKey().notNull(),
  user: text('user').notNull(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export type ImageTableType = InferModel<typeof ImageTable>
export type NewImage = InferModel<typeof ImageTable, 'insert'>

// Connect to Vercel Postgres
export const db = drizzle(sql)