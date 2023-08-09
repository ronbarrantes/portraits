// MAKE A INIT COMPONENT

import { getImages } from '@actions/images'

import { ImageUpload } from '@components/ImageUpload'
import { s3BucketInfo } from '@/constants/s3-bucket-info'

export default async function Dashboard() {
  // an array just to show images
  // const images2 = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2']

  const images = await getImages()

  console.log('IMAGES', images)

  console.log('INFO ----->', s3BucketInfo.bucketName)

  return (
    <div>
      <ImageUpload />
      <ul className="flex flex-wrap w-full h-full">
        {images.map((image, idx) => (
          <li
            className="flex items-center justify-center w-1/2 h-fit sm:w-1/4 md:w-1/6"
            key={idx}
          >
            <div className="flex w-40 h-40 m-2 bg-red-500">
              {
                // <img
                //   className="object-cover w-full h-full"
                //   src={`${s3URLGenerator(s3BucketInfo.bucketName, image.key)}`}
                //   alt="image"
                // />
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
