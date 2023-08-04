import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3'

import { MAX_FILE_SIZE } from '@/constants/max-file-size'

interface S3File {
  name: string
  buffer: Buffer | string
}

const s3URLGenerator_ThisShouldBeATempFunctionPleaseFindABetterOptionJustInCase =
  (bucket: string, key: string) => {
    return `https://${bucket}.s3.amazonaws.com/${key}`
  }

export const s3FileUpload = async (
  s3File: S3File,
  client: S3Client,
  bucket: string,
) => {
  const commands: PutObjectCommandInput = {
    Bucket: bucket,
    Key: s3File.name,
    Body: s3File.buffer,
    ContentType: 'image/jpg', // seems to be working for for png and jpg
    // ContentLength: MAX_FILE_SIZE,
  }

  const command = new PutObjectCommand(commands)

  try {
    await client.send(command)
    const url =
      s3URLGenerator_ThisShouldBeATempFunctionPleaseFindABetterOptionJustInCase(
        bucket,
        s3File.name,
      )

    return url
  } catch (err) {
    console.error(err)
  }
}
