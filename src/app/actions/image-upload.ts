'use server'
import { revalidatePath } from 'next/cache'
import { UnwrapPromise } from 'next/dist/lib/coalesced-function'

import { S3Client } from '@aws-sdk/client-s3'

import { s3BucketInfo } from '@/constants/s3-bucket-info'
import { db, ImageTable } from '@/db/schema'
import { s3FileUpload, s3FileUploadMulti, S3Image } from '@/hooks/s3-file-utils'

const client = new S3Client(s3BucketInfo.config)

export const postImages = async (
  userId: string,
  s3Files: { bufferStr: string; key: string }[],
) => {
  let imageData
  try {
    imageData = await Promise.all(
      s3Files.map(
        async (s3File) =>
          await s3FileUpload(
            {
              key: s3File.key,
              buffer: Buffer.from(s3File.bufferStr, 'base64'),
            },
            client,
            s3BucketInfo.bucketName,
          ),
      ),
    )

    /// add images to database

    // filter for images that only have a key and a success of true

    const processedImageForDB = imageData
      .filter((image: S3Image | undefined): image is S3Image => {
        return image && image.success && image.key ? true : false
      })
      .map((image: S3Image) => {
        return {
          user: userId,
          key: image.key,
          keySmall: image.key,
        }
      })

    const fileUploaded = await db
      .insert(ImageTable)
      .values(processedImageForDB)
      .returning()

    return fileUploaded
  } catch (error) {
    console.error('SOMETHING WENT WRONG', error)
  }
  if (s3Files.length === 0) {
  }
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
