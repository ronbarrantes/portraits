'use client'
import { AddImageToDB } from '@/app/actions/image-upload'
import { ImageTableType } from '@/db/schema'

interface ImageListProps {
  images: ImageTableType[]
  addImageToDB: AddImageToDB
}

export const ImageList = async ({ images, addImageToDB }: ImageListProps) => {
  console.log('IMAGES', images)

  return (
    <>
      <button onClick={() => addImageToDB()}>Add To DB</button>
    </>
  )
}
