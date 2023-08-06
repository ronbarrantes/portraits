import { init } from '@/db/init'
import { db, ImageTable } from '@/db/schema'

// This init component is probably not the best idea but it is what I'm going
// to do for the time being until I figure out a better way to use drizzle.

export const Init = async () => {
  try {
    await db.select().from(ImageTable).limit(1)
  } catch (e: any) {
    console.log('ERROR:', e.message)
    if (e.message === `relation "images" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...',
      )
      await init()
      await db.select().from(ImageTable).limit(1)
    } else {
      throw e
    }
  }

  return <></>
}
