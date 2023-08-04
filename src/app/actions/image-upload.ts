'use server'
import { S3Client } from '@aws-sdk/client-s3'
import { customAlphabet, urlAlphabet } from 'nanoid'

import { alphabet } from '@/constants/customAlphabet'
import { s3FileUpload } from '@/hooks/s3-file-utils'

const s3BucketInfo = {
  bucketName: process.env.AWS_S3_BUCKET_NAME as string,
  config: {
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  },
}

const client = new S3Client(s3BucketInfo.config)

export const postImages = async (
  s3Files: { bufferStr: string; fileType: string }[],
) => {
  console.log('S3 FILES name -->>', s3Files[0].fileType)

  const uid = customAlphabet(alphabet, 10)

  try {
    const fileUploaded = await s3FileUpload(
      {
        name: `${uid}${s3Files[0].fileType}`,
        buffer: Buffer.from(s3Files[0].bufferStr, 'base64'),
      },
      client,
      s3BucketInfo.bucketName,
    )

    console.log('FILE UPLOADED', fileUploaded)

    return fileUploaded
  } catch (error) {
    console.error('SOMETHING WENT WRONG', error)
  }
  if (s3Files.length === 0) {
  }
}

export type PostImages = typeof postImages

// get an image from s3 bucket
// returns a url

// get multiple images from s3 bucket
// returns a list of urls

// delete an image from s3 bucket
// return a confirmation

// delete multiple images from s3 bucket
// return a confirmation
