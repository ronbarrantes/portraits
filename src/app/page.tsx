// import { auth } from '@clerk/nextjs'

import { PageLayout } from '@components/layouts'
import { ImageList } from '@/components/ImageList'
import ImageUpload from '@/components/ImageUpload'

export default async function Generate() {
  const result = await fetch('http://localhost:3000/api/images')
  const data = await result.json()

  return (
    <PageLayout title="Picture app">
      <p>Upload photos</p>
      <ImageUpload />
      <ImageList />
    </PageLayout>
  )
}
