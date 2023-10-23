import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

import { S3Client } from '@aws-sdk/client-s3'
import { auth } from '@clerk/nextjs'

// import { eq } from 'drizzle-orm'
import { s3BucketInfo } from '@/constants/s3-bucket-info'
import { s3FileUpload } from '@/utils/s3-file-utils'
import { s3URLGenerator } from '@/utils/s3-url-generator'

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

export async function POST(request: NextRequest) {
  const { userId } = auth()

  if (!userId)
    return Response.json({ message: 'Unauthorized' }, { status: 401 })

  const formData: FormData = await request.formData()

  const s3ImageInfo = []

  for (const  value of formData.values()) {
    const file = value as File
    const buffer = await file.arrayBuffer()



      const image = await s3FileUpload({
        key: `${userId}/${file.name}`,
        buffer: Buffer.from(buffer),
      }, client, s3BucketInfo.bucketName)

      if(!image) return Response.json({ message: 'Something went wrong with the upload' }, { status: 500 })

      s3ImageInfo.push(image)
  }



  const prisma = new PrismaClient()

  console.log('S3 IMAGES ==>>', s3ImageInfo)


  const images = await prisma.image.createMany({ 
    skipDuplicates: true,
    data: s3ImageInfo.map(image => ({
    url: s3URLGenerator(s3BucketInfo.bucketName, image.key),
    userId: userId,
    key: image.key,
  })) })

  return Response.json({ message: 'Image uploaded successfully', images})
}
