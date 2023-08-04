import { ChangeEvent, useState } from 'react'

export const useHandleFileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const resetFilesInput = () => {
    setSelectedFiles([])
    setPreviewImages([])

    console.log('CLEAR')
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

  return {
    selectedFiles,
    previewImages,
    handleFileChange,
    resetFilesInput,
  }
}
