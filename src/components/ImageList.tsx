'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'

export const ImageList = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images')
      const data = await res.json()
      setImages(data.images)
    }
    fetchImages()
  }, [])

  return (
    <div>
      <ul className="flex flex-wrap">
        {images.map((image: {id: string, url:string}, idx) => (
          <li key={`${image.id}-${idx}`}>
            <Image src={image.url} width={30} height={30} alt="uploaded image" />
          </li>
        ))}
      </ul>
    </div>
  )
}
