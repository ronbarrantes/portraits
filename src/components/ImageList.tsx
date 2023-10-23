'use client'
import { useEffect, useState } from 'react'

export const ImageList = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images')
      const data = await res.json()

      console.log('STUFF', data.userId)

      setImages(data.images)
    }
    fetchImages()
  }, [])

  return (
    <div>
      <div>Images: {images?.length}</div>
    </div>
  )
}
