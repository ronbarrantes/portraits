import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

import { S3Client } from '@aws-sdk/client-s3'
import { auth, currentUser } from '@clerk/nextjs'
import { PrismaClient } from '@prisma/client'

import { s3BucketInfo } from '@/constants/s3-bucket-info'
import { s3FileUpload } from '@/utils/s3-file-utils'
import { s3URLGenerator } from '@/utils/s3-url-generator'

export async function GET(request: NextRequest) {
  const { userId } = auth()

  // const user = await currentUser()
  const prisma = new PrismaClient()

  // console.log('USER ---->>>', user?.id)

  if (!userId)
    return Response.json({ message: 'Unauthorized' }, { status: 401 })

  // const path = request.nextUrl.searchParams.get('path')

  // if (!path)
  //   return Response.json({ message: 'Missing path param' }, { status: 400 })

  const images = await prisma.image.findMany()

  console.log('IMAGES ---->>>', images)

  // revalidatePath(path)
  return NextResponse.json({ message: 'Image uploaded successfully', images })
}

// POST ROUTE
export async function POST(request: NextRequest) {
  const { userId } = auth()
  const client = new S3Client(s3BucketInfo.config)
  // console.log('POST USER ID ---->>>', userId)
  const path = request.nextUrl.searchParams.get('path') || '/'

  if (!userId)
    return Response.json({ message: 'Unauthorized' }, { status: 401 })

  // if (!path)
  //   return NextResponse.json({ message: 'Missing path param' }, { status: 400 })

  const formData: FormData = await request.formData()
  const s3ImageInfo = []

  for (const value of formData.values()) {
    const file = value as File
    const buffer = await file.arrayBuffer()

    const image = await s3FileUpload(
      {
        key: `${userId}/${file.name}`,
        buffer: Buffer.from(buffer),
      },
      client,
      s3BucketInfo.bucketName,
    )

    if (!image)
      return NextResponse.json(
        { message: 'Something went wrong with the upload' },
        { status: 500 },
      )

    s3ImageInfo.push(image)
  }

  const prisma = new PrismaClient()
  const images = await prisma.image.createMany({
    // skipDuplicates: true,
    data: s3ImageInfo.map((image) => ({
      url: s3URLGenerator(s3BucketInfo.bucketName, image.key),
      userId: userId,
      key: image.key,
    })),
  })

  revalidatePath(path)
  return Response.json({ message: 'Image uploaded successfully', images })
}
