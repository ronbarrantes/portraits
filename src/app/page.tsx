'use server'
import { UserButton } from '@clerk/nextjs'

import { PageLayout } from '@components/layouts'
import { Btn } from '@/components/Btn'
import { POST } from './api/images/route'

export default async function Generate() {
  // handleClick()

  return (
    <PageLayout title="Picture app">
      <p>Upload photos</p>

      <Btn />
    </PageLayout>
  )
}

// How to trigger a function if a tailwind has reach the media query of `lg:`
