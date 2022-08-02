import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}
  async test() {
    const result = await this.db.people.findMany({});
    console.log('result', result);
    return result;
  }
}
