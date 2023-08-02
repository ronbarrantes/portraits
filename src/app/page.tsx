// import Image from 'next/image'

import { UserButton } from '@clerk/nextjs'

// import { users } from '@/db/schema'
import { db, UsersTable } from '../db/drizzle'

export default async function Home() {
  // const db = drizzle(sql)

  // const allUsers = await db.select().from(UsersTable)
  // const allUsers = await db.select().from(users)

  // const client = postgres(connectionString)
  // const db = drizzle(client)

  // const allUsers = await db.select().from(users)

  // console.log(allUsers)

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  )
}
