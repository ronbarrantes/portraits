import { UserButton } from '@clerk/nextjs'

import { ImageList } from '@/components/ImageList'
import { ImageUpload } from '@/components/ImageUpload'
import { seed } from '@/db/init'
import { db, ImageTable } from '@/db/schema'

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 border border-green-500">
      <div>
        <UserButton afterSignOutUrl="/" />
        {/* <ImageUpload /> */}
        <ImageList />
      </div>
    </main>
  )
}
