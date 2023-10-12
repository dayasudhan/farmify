import {
  Controller,
  Req,
  Res,
  Post,
  Get,
  Body,
  Query,
  Param,
} from '@nestjs/common';

import { EnquiryService } from './enquiry.service';

@Controller('seller')
export class EnquiryController {
  constructor(private service: EnquiryService,
    ) {}

  @Get('/enquiries')
  async enquiries(@Req() req: any, @Res() res: any) {
    res.send(await this.service.getAllEnquiries());
  }
  @Get('/enquiries/:id')
  async item(@Req() req: any, @Res() res: any) {
    console.log("req",req.params.id)
    res.send(await this.service.getEnquiry(parseInt(req.params.id)));
  }
  @Post('/enquiry')
  async post(@Req() req: any, @Res() res: any) {

    console.log('enquery request body', req.body);
    const ret = await this.service.insertEnuiry(req.body);
    console.log('return', ret);
    res.send(ret);
  }
}
