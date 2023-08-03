'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const useHandleFileChange = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const fileArray = Array.from(files)
      setSelectedFiles(fileArray)

      const readerArray: FileReader[] = []
      fileArray.forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreviewImages((prevImages) => [
            ...new Set([...prevImages, reader.result as string]),
          ])
        }

        reader.readAsDataURL(file)
        readerArray.push(reader)
      })
    }
  }

  const resetFilesInput = () => {
    setSelectedFiles([])
    setPreviewImages([])
  }

  return { selectedFiles, previewImages, handleFileChange, resetFilesInput }
}

export const ImageUpload = () => {
  const { selectedFiles, previewImages, handleFileChange, resetFilesInput } =
    useHandleFileChange()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedFiles.length > 0) {
      try {
        // Implement your image upload logic here
        // You can use 'selectedFiles' to access the uploaded files and send them to the server.
        // For example, you can use the 'fetch' API or any other method to send the files to the server.
        // Don't forget to handle any response from the server (success or error).
        // Also, you can reset the component state after the upload is complete.

        // Reset the component state after successful upload
        resetFilesInput()
      } catch (error) {
        // Handle the error from the server
        console.error('Error uploading images:', error)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            placeholder="Upload images"
          />
        </div>
        {previewImages.length > 0 && (
          <div>
            {previewImages.map((previewImage, index) => (
              <div key={index}>
                <img
                  src={previewImage}
                  alt={`Preview ${index}`}
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
                />
              </div>
            ))}
          </div>
        )}
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default ImageUpload
