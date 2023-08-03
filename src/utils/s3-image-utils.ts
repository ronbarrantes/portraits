import AWS from 'aws-sdk'
// import multer from 'multer';
// import multerS3 from 'multer-s3';

// upload multiples images to s3 bucket
// return a list of urls

export interface S3File {
  name: string
  buffer: Buffer
}

export const uploadToS3 = async (/*file: File*/) => {
  // const formData = new FormData()
  // formData.append('file', file)
  // formData.append('upload_preset', 'dev_setups')
  // const response = await fetch(
  //   'https://api.cloudinary.com/v1_1/dkqercqjg/image/upload',
  //   {
  //     method: 'POST',
  //     body: formData,
  //   }
  // )
  // const data = await response.json()
  // return data.secure_url

  console.log('S3 BUCKET', process.env.S3_BUCKET_NAME)
}

// S3_BUCKET_NAME

export const uploadFilesToS3 = async (
  files: S3File[],
  bucketName: string,
): Promise<string[]> => {
  try {
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Replace with your AWS access key
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Replace with your AWS secret key
      region: process.env.AWS_REGION, // Replace with your S3 bucket region
    })

    const uploadPromises = files.map((file) => {
      const params = {
        Bucket: bucketName,
        Key: file.name,
        Body: file.buffer,
        ACL: 'public-read', // Set the ACL permissions for the uploaded file
      }

      return s3.upload(params).promise()
    })

    const uploadedObjects = await Promise.all(uploadPromises)

    const uploadedUrls: string[] = uploadedObjects.map((obj) => obj.Location)
    return uploadedUrls
  } catch (error) {
    console.error('Upload failed:', error)
    throw new Error('Error uploading files to S3')
  }
}

// get an image from s3 bucket
// returns a url

// get multiple images from s3 bucket
// returns a list of urls

// delete an image from s3 bucket
// return a confirmation

// delete multiple images from s3 bucket
// return a confirmation
