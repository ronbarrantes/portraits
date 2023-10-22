import { auth } from '@clerk/nextjs'
import { PrismaClient } from '@prisma/client'

export async function GET() {
  const { userId } = auth()

  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()

  return Response.json(posts)
}
