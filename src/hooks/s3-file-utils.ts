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

/**
 
{
  "Version": "2012-10-17",
  "Id": "AccessControl",
  "Statement": [
    {
      "Sid": "AllowSSLRequestsOnly",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": [
              "arn:aws:s3:::cdk-hnb659fds-assets-927439201317-us-west-2",
              "arn:aws:s3:::cdk-hnb659fds-assets-927439201317-us-west-2/*"
            ],
            "Condition": {
              "Bool": {
                "aws:SecureTransport": "false"
              }
            }
          },
          {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": [
              "arn:aws:s3:::cdk-hnb659fds-assets-927439201317-us-west-2",
              "arn:aws:s3:::cdk-hnb659fds-assets-927439201317-us-west-2/*"
            ]
          }
        ]
      }
      
      */
