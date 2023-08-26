import {
  Controller,
  Req,
  Res,
  Post,
  Get,
  Body,
  Query,
  Param,
  UploadedFile, UseInterceptors
} from '@nestjs/common';
import { SellerService } from './seller.service';
import * as multer from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { AwsService } from './aws.service';
import * as multerS3 from 'multer-s3-transform';
import * as AWS from 'aws-sdk';
import * as sharp from 'sharp';

const s3_storage = multerS3({
  s3: new AWS.S3({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  }),
  bucket: process.env.S3BUCKET, // Replace with your bucket name
  shouldTransform: true,
  transforms: [
    {
      id: 'thumbnail',
      key: (req, file, cb) => 
      {
        let fileFormat = '.jpg'; 
        if (file.mimetype === 'image/png') {
          fileFormat = '.png';
        } else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
          fileFormat = '.jpeg';
        }
        const randomString = Math.round(Math.random() * 1E9); // Generate a random string
        const timestamp = Date.now(); // Get the current timestamp
        const filename = `${randomString}-${timestamp}-${fileFormat}`;
        cb(null, `thumbnail-${filename}`);
        // cb(null, `thumbnail-${file.originalname}`)
      },
      transform: (req, file, cb) =>
        cb(null, sharp().resize(200, 200).jpeg({ quality: 90 })),
    },
  ],
  acl: 'public-read',
});
@Controller('seller')
export class SellerController {
  constructor(private service: SellerService,
    private readonly appService: AwsService) {}

    @Post('/upload')
    @UseInterceptors(FileInterceptor('image', {  storage: s3_storage  }))
    async upload(@UploadedFile() file, @Body() body, @Req() req: any, @Res() res: any) {
      console.log("i am inside upload")
      if (!file || !req.file) {
        return res.status(400).json({ message: 'No image uploaded' });
      }
      const title = body.title; 
      console.log('Uploaded file:', req.file);
      console.log('Uploaded body:', req.body);
      const inp = {...req.body,"image_urls":[file.transforms[0].location]}
      console.log("inp",inp)
      const ret = await this.service.insertItem(inp);
      console.log('return', ret);
      res.send(ret);
    }
  @Get('/a')
  test() {
    return 'pong a123';
  }
  @Get('/items')
  async items(@Req() req: any, @Res() res: any) {
    res.send(await this.service.getAllItems());
  }
  @Get('/items/:id')
  async item(@Req() req: any, @Res() res: any) {
    console.log("req",req.params.id)
    res.send(await this.service.getItem(parseInt(req.params.id)));
  }
  @Get('/post1')
  async post1(@Req() req: any, @Res() res: any) {
    const item = {"name":"cltivator","year":"2020"}
    const ret = await this.service.insertItem(item);
    console.log('return', ret);
    res.send(ret);
  }
  @Post('/post')
  async post(@Req() req: any, @Res() res: any) {

    console.log('request body', req.body);
    const ret = await this.service.insertItem(req.body);
    console.log('return', ret);
    res.send(ret);
  }
}
