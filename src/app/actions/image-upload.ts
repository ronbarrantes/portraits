'use server'
// import { S3File, uploadFilesToS3 } from '@/utils/s3-image-utils'

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import {
  AbortMultipartUploadCommandOutput,
  S3,
  S3ClientConfig,
} from '@aws-sdk/client-s3'

import { s3FileUpload } from '@/hooks/s3-file-utils'
// import { Upload } from '@aws-sdk/lib-storage'
import { fileToBuffer } from '@/utils/file-to-buffer'
// import multer from 'multer';
// import multerS3 from 'multer-s3';

// upload multiples images to s3 bucket
// return a list of urls

interface S3File {
  name: string
  bufferStr: string
  // buffer: Buffer
}

const config: S3ClientConfig = {
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
}

export const uploadToS3 = async (/*file: File*/) => {
  // const formData = new FormData()
  // formData.append('file', file)
  // formData.append('upload_preset', 'dev_setups')
  // const response = await fetch(
  //   'https://api.cloudinary.com/v1_1/dkqercqjg/image/upload',
  //   {
  //     method: 'POST',
  //     body: formData,
  //   }
  // )
  // const data = await response.json()
  // return data.secure_url

  console.log('S3 BUCKET', process.env.S3_BUCKET_NAME)
}

// S3_BUCKET_NAME

// get an image from s3 bucket
// returns a url

// get multiple images from s3 bucket
// returns a list of urls

// delete an image from s3 bucket
// return a confirmation

// delete multiple images from s3 bucket
// return a confirmation

// get image

// post image

const client = new S3Client(config)

export const postImages = async (s3Files: S3File[]) => {
  // console.log('IMAGES', s3Files)

  console.log('S3 FILES name -->>', s3Files[0].name)

  try {
    return s3FileUpload(
      {
        name: `${s3Files[0].name}`,
        buffer: Buffer.from(s3Files[0].bufferStr, 'base64'),
      },
      client,
      process.env.AWS_S3_BUCKET_NAME!,
    )
  } catch (error) {
    console.error('SOMETHING WENT WRONG', error)
  }
  if (s3Files.length === 0) {
  }
}

// export type PostImagesFn = (files: File[]) => Promise<void>

export type PostImages = typeof postImages

// delete image
