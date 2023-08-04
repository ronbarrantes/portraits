import { addImageToDB } from '@/app/actions/image-upload'
import { ImageUpload } from '@/components/ImageUpload'
import { init, seed } from '@/db/init'
import { db, ImageTable } from '@/db/schema'

export const ImageList = async () => {
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

  console.log('IMAGES', images)

  return (
    <>
      <h1>List</h1>
      <div>stuff</div>

      <button onClick={addImageToDB}>Add To DB</button>
    </>
  )
}
