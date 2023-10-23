'use client'
import { revalidatePath } from 'next/cache'
import Image from 'next/image'

import { extname } from 'path'

// import { postImages } from '@/app/actions/images'
import { useHandleFileUpload } from '@/hooks/use-handle-file-upload'
import { fileToBuffer } from '@/utils/file-to-buffer'

interface ImageUploadProps {
  // postImages: PostImages
  // userId: string
  // images: Image[]
}

export const ImageUpload = () => {
  const { previewImages, selectedFiles, handleFileChange, resetFilesInput } =
    useHandleFileUpload()

  const formData = new FormData()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedFiles.length > 0) {
      try {
        // let imagesToUpload = await Promise.all(
        //   selectedFiles.map(async (file) => {
        //     const bufferStr = (await fileToBuffer(file)).toString('base64')
        //     // console.log('EXT', extname(file.name))
        //     return {
        //       key: file.name,
        //       bufferStr,
        //     }
        //   }),
        // )

        selectedFiles.forEach((file, idx) => {
          formData.append(`images-${idx}`, file)
        })

        // imagesToUpload = imagesToUpload.filter((image) => image.key !== '')

        // console.log('IMAGES TO UPLOAD', imagesToUpload)

        console.log('Images', `${process.env.NEXT_PUBLIC_APP}/api/images`)

        const image = await fetch(
          `${process.env.NEXT_PUBLIC_APP}/api/images`,
          {
            method: 'POST',
            body: formData,
          },

          // imagesToUpload
        )

        console.log('THE IMAGE STUFF ===>>>', image)
        console.log('ALL WENT WELL')

        // try {
        //   // do the fetch post here

        //   // console.log(imagesToUpload)

        //   revalidatePath('/')
        // } catch (error) {
        //   console.log('TOOK A DUMP')
        // }

      } catch (error) {
        // Handle the error from the server
        console.error('Error uploading images:', error)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex gap-2">

          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            name="images-upload"
            id="image-upload"
            multiple
            className="hidden"
            onChange={handleFileChange}
            placeholder="Upload images"
            // max={MAX_FILE_SIZE}
            // title="Upload images"
          />
          <label
            className="p-2 border border-blue-500 rounded-md cursor-pointer"
            htmlFor="image-upload"
          >
            {!previewImages.length
              ? 'Upload images'
              : `${previewImages.length} images ready`}
          </label>



          {previewImages.length > 0 && (
<>
            
            <button className="p-2 border border-blue-500 rounded-md cursor-pointer" type="submit">Upload</button>
            <button className="p-2 border border-blue-500 rounded-md cursor-pointer" type="button" onClick={resetFilesInput}>
              Reset
            </button>
  
</>
              )
            
            
            }


        </div>
        {previewImages.length > 0 && (
          <div className='flex flex-wrap'>
            {previewImages.map((previewImage, index) => (
              <div key={index}>
                <Image
                  src={previewImage}
                  alt={`Preview ${index}`}
                  className="max-w-xs max-h-xs"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        )}

      </form>
    </div>
  )
}

export default ImageUpload
