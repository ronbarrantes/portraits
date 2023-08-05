import { UserButton } from '@clerk/nextjs'

import { ImageList } from '@components/ImageList'
import { ImageUpload } from '@components/ImageUpload'
import { PageLayout } from '@components/PageLayout'
import { init } from '@/db/init'
import { db, ImageTable } from '@/db/schema'
import { addImageToDB } from './actions/image-upload'

// MAKE A INIT COMPONENT

export default async function Home() {
  let images
  // let startTime = Date.now()
  try {
    images = await db.select().from(ImageTable).limit(1)
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
    <PageLayout>
      <h1>Hello world</h1>
      {/* <ImageUpload /> */}
      {/* <ImageList images={images} addImageToDB={addImageToDB} /> */}
    </PageLayout>
  )
}
