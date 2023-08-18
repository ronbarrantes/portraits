export const s3BucketInfo = {
  bucketName: process.env.AWS_S3_BUCKET_NAME as string,
  config: {
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  },
}
