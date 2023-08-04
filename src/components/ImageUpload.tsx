'use client'
import { extname } from 'path'

import { PostImages } from '@/app/actions/image-upload'
import { useHandleFileUpload } from '@/hooks/use-handle-file-upload'
import { fileToBuffer } from '@/utils/file-to-buffer'

interface ImageUploadProps {
  postImages: PostImages
}

export const ImageUpload = ({ postImages }: ImageUploadProps) => {
  const { previewImages, selectedFiles, handleFileChange, resetFilesInput } =
    useHandleFileUpload()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedFiles.length > 0) {
      // TODO: need to make this work for multiple images or files
      try {
        // Implement your image upload logic here
        // You can use 'selectedFiles' to access the uploaded files and send them to the server.
        // For example, you can use the 'fetch' API or any other method to send the files to the server.
        // Don't forget to handle any response from the server (success or error).
        // Also, you can reset the component state after the upload is complete.

        // Reset the component state after successful upload

        const images = await Promise.all(
          selectedFiles.map(async (file) => {
            const bufferStr = (await fileToBuffer(file)).toString('base64')
            console.log('EXT', extname(file.name))
            return {
              // fileType: extname(file.name),
              name: file.name,
              bufferStr,
            }
          }),
        )

        try {
          console.log('THE IMAGE STUFF ===>>>', images)
          const image = await postImages(images)
          console.log('THE IMAGE STUFF ===>>>', image)
          console.log('ALL WENT WELL')
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
