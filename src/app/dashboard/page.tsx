// MAKE A INIT COMPONENT

import Image from 'next/image'

import { getImages } from '@actions/images'

// import { getSignedUrl,
// S3RequestPresigner
// } from '@aws-sdk/s3-request-presigner'
import { ImageUpload } from '@components/ImageUpload'
import { s3BucketInfo } from '@/constants/s3-bucket-info'
import { s3URLGenerator } from '@/utils'

export default async function Dashboard() {
  // an array just to show images
  // const images2 = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2']

  const images = await getImages()

  console.log(
    'IMAGES',
    images.map((image) => {
      // s3URLGenerator(s3BucketInfo.bucketName, image.key)
      return s3URLGenerator(s3BucketInfo.bucketName, image.key)
    }),
  )

  // console.log('INFO ----->', s3BucketInfo.bucketName)

  // const theURL = getSignedUrl(s3BucketInfo.config, )
  // S3RequestPresigner()

  return (
    <div>
      <ImageUpload images={images} />
      <ul className="flex flex-wrap w-full h-full">
        {images.map((image, idx) => (
          <li
            className="flex items-center justify-center w-1/2 h-fit sm:w-1/4 md:w-1/6"
            key={idx}
          >
            {
              <Image
                className="object-cover w-full h-full"
                src={`${s3URLGenerator(s3BucketInfo.bucketName, image.key)}`}
                alt="image"
                width={200}
                height={200}
              />
            }
          </li>
        ))}
      </ul>
    </div>
  )
}
