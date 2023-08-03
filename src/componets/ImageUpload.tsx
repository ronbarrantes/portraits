'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedFile) {
      try {
        // Implement your image upload logic here
        // You can use 'selectedFile' to access the uploaded file and send it to the server.
        // For example, you can use the 'fetch' API or any other method to send the file to the server.
        // Don't forget to handle any response from the server (success or error).
        // Also, you can reset the component state after the upload is complete.

        // Reset the component state after successful upload
        setSelectedFile(null)
        setPreviewImage(null)
      } catch (error) {
        // Handle the error from the server
        console.error('Error uploading image:', error)
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
            onChange={handleFileChange}
            placeholder="upload image"
          />
        </div>
        {previewImage && (
          <div>
            <img
              src={previewImage}
              alt="Preview"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          </div>
        )}
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default ImageUpload
