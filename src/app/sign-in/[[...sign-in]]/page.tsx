import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <SignIn />
    </div>
  )
}
