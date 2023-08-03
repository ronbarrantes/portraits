// import Image from 'next/image'

import { postImages } from '@actions/image-upload'
import { UserButton } from '@clerk/nextjs'

import { ImageUpload } from '@/components/ImageUpload'
// import { uploadToS3 } from '@/utils/s3-image-utils'
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

  // uploadToS3()

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 border border-green-500">
      <div>
        <UserButton afterSignOutUrl="/" />
        <ImageUpload postImages={postImages} />
      </div>
    </main>
  )
}
