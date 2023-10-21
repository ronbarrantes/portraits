import { UserButton } from '@clerk/nextjs'

import { PageLayout } from '@components/layouts'

export default async function Generate() {
  return (
    <PageLayout title='Picture app' >
      <p>Upload photos</p>
    </PageLayout>
  )
}

// How to trigger a function if a tailwind has reach the media query of `lg:`
