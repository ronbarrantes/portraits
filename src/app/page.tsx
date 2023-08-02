import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  )
}
