import { ChangeEvent, useState } from 'react'

export const useHandleFileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const resetFilesInput = () => {
    setSelectedFiles([])
    setPreviewImages([])
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const fileArray = Array.from(files)
      setSelectedFiles(fileArray)

      const readerArray: FileReader[] = []
      fileArray.forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreviewImages((prevImages) => {
            return [...new Set([...prevImages, reader.result as string])]
          })
        }

        reader.readAsDataURL(file)
        readerArray.push(reader)
      })
    }
  }

  const handleFileSubmit = async () => {
    // event.preventDefault()
    if (selectedFiles.length > 0) {
      try {
        // Implement your image upload logic here
        // You can use 'selectedFiles' to access the uploaded files and send them to the server.
        // For example, you can use the 'fetch' API or any other method to send the files to the server.
        // Don't forget to handle any response from the server (success or error).
        // Also, you can reset the component state after the upload is complete.

        // Reset the component state after successful upload

        console.log('SUBMITTED_FILES', selectedFiles)

        setSelectedFiles([])
        setPreviewImages([])
      } catch (error) {
        // Handle the error from the server
        console.error('Error uploading images:', error)
      }
    }
  }

  return {
    selectedFiles,
    previewImages,
    handleFileChange,
    resetFilesInput,
    handleFileSubmit,
  }
}
