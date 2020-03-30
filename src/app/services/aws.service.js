import S3 from 'react-aws-s3';
import axios from 'axios';

const config = {
  bucketName: process.env.REACT_APP_BUCKET,
  dirName: 'support/attachment',
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
};

const ReactS3Client = new S3(config);

export function awsServices(file) {
  return new Promise((resolve, reject) => {
    let newFileName = `${Date.now()}-support-attachment`;
    ReactS3Client.uploadFile(file, newFileName)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

export const ROOT_URL = process.env.REACT_APP_API_URL;

export function fileUpload(file) {
  console.log(`${ROOT_URL}/api/fileupload`, file);
  return axios.post(`${ROOT_URL}/api/fileupload`, file);
}
