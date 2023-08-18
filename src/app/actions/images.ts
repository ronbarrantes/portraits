'use server'
import { revalidatePath } from 'next/cache'

import { S3Client } from '@aws-sdk/client-s3'
import { auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'

import { s3BucketInfo } from '@/constants/s3-bucket-info'
import { db, ImageTable } from '@/db/schema'
import { s3FileUploadMulti } from '@/utils/s3-file-utils'

const client = new S3Client(s3BucketInfo.config)

export const postImages = async (
  s3Files: { bufferStr: string; key: string }[],
) => {
  const { userId } = auth()

  if (!userId) throw new Error('User is not logged in')

  let imageData
  try {
    imageData = await Promise.all(
      s3Files.map(
        async (s3File) =>
          await s3FileUploadMulti(
            {
              key: s3File.key,
              buffer: Buffer.from(s3File.bufferStr, 'base64'),
            },
            {
              key: s3File.key,
              buffer: Buffer.from(s3File.bufferStr, 'base64'),
            },
            client,
            s3BucketInfo.bucketName,
          ),
      ),
    )

    const processedImageForDB = imageData.map((image) => {
      if (!image) throw new Error('Something went wrong with the upload')
      return {
        user: userId,
        key: image.key,
        keySmall: image.keySmall,
      }
    })

    return await db.insert(ImageTable).values(processedImageForDB).returning()
  } catch (error) {
    console.error('SOMETHING WENT WRONG', error)
  }

  revalidatePath('/dashboard')
}

export const getImages = async () => {
  const { userId } = auth()

  if (!userId) throw new Error('User is not logged in')

  const images = await db
    .select()
    .from(ImageTable)
    .where(eq(ImageTable.user, userId))

  return images
}

// export const addImageToDB = async () => {
//   const image = await db
//     .insert(ImageTable)
//     .values({
//       user: '12345678765',
//       key: 'https://ronb.co',
//       keySmall: 'https://ronb.co',
//     })
//     .returning()

//   console.log('IMAGE ADDED TO DB', image)

//   revalidatePath('/')
// }

export type PostImages = typeof postImages
// export type AddImageToDB = typeof addImageToDB

// get an image from s3 bucket
// returns a url

// get multiple images from s3 bucket
// returns a list of urls

// delete an image from s3 bucket
// return a confirmation

// delete multiple images from s3 bucket
// return a confirmation
