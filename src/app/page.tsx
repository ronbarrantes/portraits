// import { auth } from '@clerk/nextjs'

import { PageLayout } from '@components/layouts'
import { ImageList } from '@/components/ImageList'
import ImageUpload from '@/components/ImageUpload'

export default async function Generate() {
  const result = await fetch(`${process.env.NEXT_APP}/api/images`)
  const data = await result.json()

  console.log('DATA', data?.images.length)

  return (
    <PageLayout title="Picture app">
      <p>Upload photos</p>
      <ImageUpload />
      {/* <ImageList /> */}
    </PageLayout>
  )
}
