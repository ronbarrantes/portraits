import {
  PutObjectCommand,
  PutObjectCommandInput,
  // Put
  S3Client,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

interface S3File {
  name: string
  buffer: Buffer | string
}

export const s3FileUpload = async (
  s3File: S3File,
  client: S3Client,
  bucket: string,
) => {
  // I wanna return the file location
  // return the location of the file

  const commands: PutObjectCommandInput = {
    Bucket: bucket,
    Key: s3File.name,
    Body: s3File.buffer,
    ContentType: 'image/jpg', // seems to be working for for png and jpg
  }

  const command = new PutObjectCommand(commands)

  try {
    await client.send(command)
    const url = (
      await getSignedUrl(client, command, { expiresIn: 3600 })
    ).split('?')[0]
    return { url }
  } catch (err) {
    console.error(err)
  }
}
