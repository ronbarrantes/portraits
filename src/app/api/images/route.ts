import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

import { S3Client } from '@aws-sdk/client-s3'
import { auth } from '@clerk/nextjs'

// import { eq } from 'drizzle-orm'
import { s3BucketInfo } from '@/constants/s3-bucket-info'
import { s3FileUploadMulti } from '@/utils/s3-file-utils'

const client = new S3Client(s3BucketInfo.config)

import { PrismaClient } from '@prisma/client'

export async function GET(request: NextRequest) {
  // const path = request.nextUrl.searchParams.get('path')

  // const { userId } = auth()

  const prisma = new PrismaClient()
  const images = await prisma.image.findMany()

  // if (!path) {
  //   return Response.json({ message: 'Missing path param' }, { status: 400 })
  // }

  // revalidatePath(path)

  return Response.json(images)
}

export async function POST() {
  const { userId } = auth()

  if (!userId)
    return Response.json({ message: 'Unauthorized' }, { status: 401 })

  const prisma = new PrismaClient()

  const image = await prisma.image.create({
    data: {
      url: 'https://picsum.photos/200/300',
      userId,
    },
  })

  return Response.json(image)
}
