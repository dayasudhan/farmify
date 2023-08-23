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
import { UserService } from './user.service';
import { ItemService } from './item.service';
import { SellerService } from './seller.service';

@Controller('seller')
export class SellerController {
  constructor(private service: SellerService) {}
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

    // const item = {"name":"cltivator","year":"2020"}
    // const ret = await this.service.insertItem(item);
    console.log('request body', req.body);
    const ret = await this.service.insertItem(req.body);
    console.log('return', ret);
    res.send(ret);
  }
  // @Get('/c')
  // async test3(@Req() req: any, @Res() res: any) {
  //   const ret = await this.service.findAll();
  //   console.log('return', ret);
  //   res.send(ret);
  // }
  // @Get('/d')
  // async test4(@Req() req: any, @Res() res: any) {
  //   const ret = await this.service.readById();
  //   console.log('return', ret);
  //   res.send(ret);
  // }
  // @Get('/e')
  // async update(@Req() req: any, @Res() res: any) {
  //   const ret = await this.service.update();
  //   console.log('return', ret);
  //   res.send(ret);
  // }
  // @Get('/vendor')
  // async menu(@Req() req: any, @Res() res: any) {
  //   const ret = await this.itemService.findAll();
  //   console.log('return', ret);
  //   res.send(ret);
  // }
  // @Get('/menu')
  // async menu2(@Req() req: any, @Res() res: any) {
  //   const ret = await this.itemService.findMenuAll();
  //   console.log('return', ret);
  //   res.send(ret);
  // }
  // @Get('/menuid')
  // async findmfindById(
  //   @Query('id') id: string,
  //   @Req() req: any,
  //   @Res() res: any,
  // ) {
  //   const ret = await this.itemService.findByMenuId(id);
  //   console.log('return', ret['menu']);

  //   res.send(ret);
  // }
  // @Get('/findone')
  // async findone(@Query('id') id: string, @Req() req: any, @Res() res: any) {
  //   const ret = await this.itemService.findOne(id);
  //   console.log('return findone', ret);
  //   res.send(ret);
  // }

}
