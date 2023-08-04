import * as dotenv from 'dotenv'
import type { Config } from 'drizzle-kit'

dotenv.config({
  path: '.env.development.local',
})

export default {
  schema: './src/db/schema.ts',
  out: './out',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL as string,
  },
} satisfies Config
