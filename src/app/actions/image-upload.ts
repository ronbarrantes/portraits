'use server'
import { fileToBuffer } from '@/utils/file-to-buffer'
import { uploadFilesToS3 } from '@/utils/s3-image-utils'

// get image

// post image

export const postImages = async (files: File[]) => {
  // console.log('IMAGES', files)

  return 'success'
}

// delete image

export type PostImagesFn = (files: File[]) => Promise<void>
