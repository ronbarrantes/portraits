'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'

import { useHandleFileUpload } from '@/hooks/use-handle-file-upload'

export const ImageUpload = () => {
  const { previewImages, handleFileChange, resetFilesInput, handleFileSubmit } =
    useHandleFileUpload()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleFileSubmit()
  }

  return (
    <div>
      <div className="text-2xl">Hello</div>
      <form onSubmit={handleSubmit}>
        <div className="border border-red-500">
          <input
            type="file"
            accept="image/*"
            name="images-upload"
            id="image-upload"
            multiple
            onChange={handleFileChange}
            placeholder="Upload images"
            // title="Upload images"
            style={{ display: 'none' }}
          />
          <label htmlFor="image-upload">
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
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
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
