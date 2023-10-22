import { PrismaClient } from '@prisma/client'

export async function GET() {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()
  return Response.json(posts)
}
