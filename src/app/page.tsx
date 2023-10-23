
import { PageLayout } from '@components/layouts'
import ImageUpload from '@/components/ImageUpload'


export default async function Generate() {
  // handleClick()

  return (
    <PageLayout title="Picture app">
      <p>Upload photos</p>
      <ImageUpload />
    </PageLayout>
  )
}

// How to trigger a function if a tailwind has reach the media query of `lg:`
