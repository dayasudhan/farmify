import { Controller, Get, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('')
export class UserController {
  constructor(private service: UserService) {}
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
}
