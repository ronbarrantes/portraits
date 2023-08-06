import { UserButton } from '@clerk/nextjs'

import { ImageList } from '@components/ImageList'
import { ImageUpload } from '@components/ImageUpload'
import { PageLayout } from '@components/PageLayout'
import { init } from '@/db/init'
import { db, ImageTable } from '@/db/schema'
import { addImageToDB } from './actions/image-upload'

// MAKE A INIT COMPONENT

export default async function Home() {
  return (
    <PageLayout>
      <h1>Hello world</h1>
      {/* <ImageUpload /> */}
      {/* <ImageList images={images} addImageToDB={addImageToDB} /> */}
    </PageLayout>
  )
}
