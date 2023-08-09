/**
 * This function is used to generate a url to a file in an aws bucket. Aws probably
 * has a better solution but this is simple enough for now.
 * @param bucket The bucket is the name of the bucket in aws. Example: 'portrait-app-bucket'
 * @param key The key is the name of the file. It can include a path. Example: 'images/1234567890.jpg'
 * @returns A url to the file in the bucket. Example: 'https://portrait-app-bucket.s3.amazonaws.com/images/1234567890.jpg'
 */
export const s3URLGenerator = (bucket: string, key: string) => {
  return `https://${bucket}.s3.amazonaws.com/${key}`
}
