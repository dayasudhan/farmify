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

@Controller('')
export class UserController {
  constructor(private service: UserService, private itemService: ItemService) {}
  @Get('/a')
  test() {
    return 'pong a123';
  }
  @Get('/b')
  async test2(@Req() req: any, @Res() res: any) {
    res.send(await this.service.test());
  }
  @Get('/c')
  async test3(@Req() req: any, @Res() res: any) {
    const ret = await this.service.findAll();
    console.log('return', ret);
    res.send(ret);
  }
  @Get('/d')
  async test4(@Req() req: any, @Res() res: any) {
    const ret = await this.service.readById();
    console.log('return', ret);
    res.send(ret);
  }
  @Get('/e')
  async update(@Req() req: any, @Res() res: any) {
    const ret = await this.service.update();
    console.log('return', ret);
    res.send(ret);
  }
  @Get('/vendor')
  async menu(@Req() req: any, @Res() res: any) {
    const ret = await this.itemService.findAll();
    console.log('return', ret);
    res.send(ret);
  }
  @Get('/menu')
  async menu2(@Req() req: any, @Res() res: any) {
    const ret = await this.itemService.findMenuAll();
    console.log('return', ret);
    res.send(ret);
  }
  @Get('/menuid')
  async findmfindById(
    @Query('id') id: string,
    @Req() req: any,
    @Res() res: any,
  ) {
    const ret = await this.itemService.findByMenuId(id);
    console.log('return', ret['menu']);

    res.send(ret);
  }
  @Get('/findone')
  async findone(@Query('id') id: string, @Req() req: any, @Res() res: any) {
    const ret = await this.itemService.findOne(id);
    console.log('return findone', ret);
    res.send(ret);
  }
}
