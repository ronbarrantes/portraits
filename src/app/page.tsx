import { UserButton } from '@clerk/nextjs'

import { ImageList } from '@/components/ImageList'
import { ImageUpload } from '@/components/ImageUpload'
import { init, seed } from '@/db/init'
import { db, ImageTable } from '@/db/schema'
import { addImageToDB } from './actions/image-upload'

export default async function Home() {
  let images
  // let startTime = Date.now()
  try {
    images = await db.select().from(ImageTable)
  } catch (e: any) {
    console.log('ERROR ------>>>>>', e.message)
    if (e.message === `relation "images" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...',
      )
      await init()
      images = await db.select().from(ImageTable)
    } else {
      throw e
    }
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 border border-green-500">
      <div>
        <UserButton afterSignOutUrl="/" />
        <p>Hello world</p>
        {/* <ImageUpload /> */}
        {/* <ImageList images={images} addImageToDB={addImageToDB} /> */}
      </div>
    </main>
  )
}
