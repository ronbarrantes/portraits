import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3'

interface S3File {
  name: string
  // bufferStr: string
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
  }

  const command = new PutObjectCommand(commands)

  try {
    const response = await client.send(command)
    return response
  } catch (err) {
    console.error(err)
  }
}
