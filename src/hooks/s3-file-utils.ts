import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3'

import { MAX_FILE_SIZE } from '@/constants/max-file-size'

interface S3File {
  key: string
  buffer: Buffer | string
}

export const s3FileUpload = async (
  s3File: S3File,
  client: S3Client,
  bucket: string,
) => {
  const commands: PutObjectCommandInput = {
    Bucket: bucket,
    Key: s3File.key,
    Body: s3File.buffer,
    ContentType: 'image/jpg', // seems to be working for for png and jpg
    // ContentLength: MAX_FILE_SIZE,
  }

  const command = new PutObjectCommand(commands)

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
