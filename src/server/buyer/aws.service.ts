import { Injectable, Req, Res } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as sharp from 'sharp';
@Injectable()
export class AwsService {
  AWS_S3_BUCKET = process.env.S3BUCKET;
  s3 = new AWS.S3({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  });
  async uploadFile(file) {
    console.log("uploadFile",file);
    const { originalname } = file;
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    let fileFormat = '.jpg'; 
    
    if (file.mimetype === 'image/png') {
      fileFormat = '.png';
    } else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
      fileFormat = '.jpeg';
    }
    const filename = file.fieldname + '-' + uniqueSuffix + fileFormat;
    console.log("filename",filename)
    const ret = await this.s3_upload(
      file.buffer,
      this.AWS_S3_BUCKET,
      filename,
      file.mimetype,
    );
    console.log("ret",ret)
    return ret;
  }

  async s3_upload(file, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'ap-south-1',
      },
    };

    try {
      let s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }
}