'use server'
import { fileToBuffer } from '@/utils/file-to-buffer'
import { S3File, uploadFilesToS3 } from '@/utils/s3-image-utils'

// get image

// post image

export const postImages = async (s3Files: S3File[]) => {
  console.log('IMAGES', s3Files)
}

// delete image

// export type PostImagesFn = (files: File[]) => Promise<void>

export type PostImages = typeof postImages
