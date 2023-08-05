import { UserButton } from '@clerk/nextjs'

import { ImageList } from '@/components/ImageList'
import { ImageUpload } from '@/components/ImageUpload'
import { init } from '@/db/init'
import { db, ImageTable } from '@/db/schema'

// MAKE A INIT COMPONENT

// MAKE A CONTENT COMPONENT

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24 border border-green-500">
      <header>
        <span>Portrait app</span>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Generated</a>
              </li>

              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            </ul>
          </nav>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

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
    <PageLayout>
      <h1>Hello world</h1>
      {/* <ImageUpload /> */}
      {/* <ImageList images={images} addImageToDB={addImageToDB} /> */}
    </PageLayout>
  )
}
