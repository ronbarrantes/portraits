'use client'
import { revalidatePath } from 'next/cache'

import { extname } from 'path'

import { postImages } from '@/app/actions/images'
import { Image } from '@/db/schema'
// import { MAX_FILE_SIZE } from '@/constants/max-file-size'
import { useHandleFileUpload } from '@/hooks/use-handle-file-upload'
import { fileToBuffer } from '@/utils/file-to-buffer'

interface ImageUploadProps {
  // postImages: PostImages
  // userId: string
  images: Image[]
}

export const ImageUpload = ({}: ImageUploadProps) => {
  const { previewImages, selectedFiles, handleFileChange, resetFilesInput } =
    useHandleFileUpload()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault()
    if (selectedFiles.length > 0) {
      try {
        let imagesToUpload = await Promise.all(
          selectedFiles.map(async (file) => {
            const bufferStr = (await fileToBuffer(file)).toString('base64')
            console.log('EXT', extname(file.name))
            return {
              key: file.name,
              bufferStr,
            }
          }),
        )

        imagesToUpload = imagesToUpload.filter((image) => image.key !== '')

        try {
          console.log('THE IMAGE STUFF ===>>>', imagesToUpload)
          const image = await postImages(imagesToUpload)
          console.log('THE IMAGE STUFF ===>>>', image)
          console.log('ALL WENT WELL')

          console.log(imagesToUpload)

          revalidatePath('/')
        } catch (error) {
          console.log('TOOK A DUMP')
        }

        console.log('SUBMITTED_FILES', selectedFiles)

        resetFilesInput()
      } catch (error) {
        // Handle the error from the server
        console.error('Error uploading images:', error)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="text-2xl">Hello</div>
        <div>
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
        </div>
        {previewImages.length > 0 && (
          <div>
            {previewImages.map((previewImage, index) => (
              <div key={index}>
                <img
                  src={previewImage}
                  alt={`Preview ${index}`}
                  className="max-w-xs max-h-xs"
                />
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <button type="submit">Upload</button>
          <button type="button" onClick={resetFilesInput}>
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageUpload