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
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    let fileFormat = '.jpg'; 
    
    if (file.mimetype === 'image/png') {
      fileFormat = '.png';
    } else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
      fileFormat = '.jpeg';
    }
    cb(null, file.fieldname + '-' + uniqueSuffix + fileFormat);
  },
});

@Controller('seller')
export class SellerController {
  constructor(private service: SellerService,
    private readonly appService: AwsService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('image'))
  async upload(@UploadedFile() file, @Body() body, @Req() req: any, @Res() res: any) {
    console.log("i am inside upload")
    if (!file || !req.file) {
      return res.status(400).json({ message: 'No image uploaded' });
    }
    const s3_ret = await  this.appService.uploadFile(file);
    console.log("ret",s3_ret)
    const title = body.title; 
    // console.log('Uploaded file:', req.file);
    // console.log('Uploaded body:', req.body);
    const inp = {...req.body,"image_urls":[s3_ret.Location]}
    //console.log("inp",inp)
    const ret2 = await this.service.insertItem(inp);
    //console.log('return', ret2);
    res.send(ret2);
  }
  @Get('/a')
  test() {
    return 'pong a123';
  }
  @Get('/items')
  async test2(@Req() req: any, @Res() res: any) {
    res.send(await this.service.test());
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
