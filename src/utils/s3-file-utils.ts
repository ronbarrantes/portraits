import { UnwrapPromise } from 'next/dist/lib/coalesced-function'

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

// import { MAX_FILE_SIZE } from '@/constants/max-file-size'

interface S3File {
  key: string
  buffer: Buffer | string
}

export type S3Image = Exclude<
  UnwrapPromise<ReturnType<typeof s3FileUpload>>,
  undefined
>

export type S3ImageMulti = Exclude<
  UnwrapPromise<ReturnType<typeof s3FileUploadMulti>>,
  undefined
>

export const s3FileUpload = async (
  s3File: S3File,
  client: S3Client,
  bucket: string,
) => {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: s3File.key,
    Body: s3File.buffer,
    ContentType: 'image/jpg', // seems to be working for for png and jpg
    // ContentLength: MAX_FILE_SIZE,
  })

  try {
    await client.send(command)
    const result = {
      key: s3File.key,
      success: true,
    }
    return result
  } catch (err) {
    console.error(err)
  }
}

export const s3FileUploadMulti = async (
  s3File: S3File,
  s3FileSmall: S3File,
  client: S3Client,
  bucket: string,
) => {
  try {
    const largeImage = await s3FileUpload(s3File, client, bucket)
    const smallImage = await s3FileUpload(s3FileSmall, client, bucket) // I might have to process the here

    if (!largeImage || !smallImage)
      throw new Error('Something went wrong with the upload')

    return {
      key: largeImage.key,
      keySmall: smallImage.key,
      success: true,
    }
  } catch (err) {
    console.error(err)
  }
}
