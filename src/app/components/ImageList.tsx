'use client'
import { AddImageToDB } from '@/app/actions/image-upload'
import { Image } from '@/db/schema'

interface ImageListProps {
  images: Image[]
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
