'use client'
import { AddImageToDB } from '@/app/actions/image-upload'
import { ImageUpload } from '@/components/ImageUpload'
import { init, seed } from '@/db/init'
import { db, ImageTable, ImageTableType } from '@/db/schema'

interface ImageListProps {
  images: ImageTableType[]
  addImageToDB: AddImageToDB
}

export const ImageList = async ({ images, addImageToDB }: ImageListProps) => {
  console.log('IMAGES', images)

  return (
    <>
      <h1>List</h1>
      <div>stuff</div>

      <button onClick={() => addImageToDB()}>Add To DB</button>
    </>
  )
}
