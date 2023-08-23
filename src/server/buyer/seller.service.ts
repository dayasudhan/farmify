import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SellerService {

  constructor(
    private db: PrismaService,
  ) {}
  async test() {
    const result = await this.db.products.findMany({});
    console.log('result', result);
    return result;
  }
  async  insertItem(data) {
    const item = await this.db.products.create({
      data: {
        name: data.item_name,
        year: data.item_year,
        // Other fields from your User model
      },
    });
    return item;
  }
}
