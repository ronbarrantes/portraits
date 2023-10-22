import { revalidatePath } from 'next/cache'

import { S3Client } from '@aws-sdk/client-s3'
import { auth } from '@clerk/nextjs'

// import { eq } from 'drizzle-orm'
import { s3BucketInfo } from '@/constants/s3-bucket-info'
import { s3FileUploadMulti } from '@/utils/s3-file-utils'

const client = new S3Client(s3BucketInfo.config)

import { PrismaClient } from '@prisma/client'

export async function GET() {
  const { userId } = auth()

  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()

  return Response.json(posts)
}

export async function POST() {
  const { userId } = auth()

  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()

  return Response.json(posts)
}
