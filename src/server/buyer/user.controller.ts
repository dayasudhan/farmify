import { Controller, Get, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('')
export class UserController {
  constructor(private service: UserService) {}
  @Get('/a')
  test() {
    return 'pong a';
  }
  @Get('/b')
  async test2(@Req() req: any, @Res() res: any) {
    res.send(await this.service.test());
  }
}
