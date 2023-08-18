import { UserButton } from '@clerk/nextjs'

import { PageLayout } from '@components/layouts'

// Create a plan
//
// Start the new layout

export default async function Generate() {
  return (
    <PageLayout>
      <h1 className="text-4xl">
        Here be an introduction to what the hell is going on
      </h1>
      <p>This will be like a sumarize dashboard</p>
    </PageLayout>
  )
}
