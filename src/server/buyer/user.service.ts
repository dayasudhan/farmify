import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { CountersDocument, Counters } from '../schemas/counter.schema';
import { Connection } from 'mongoose';
@Injectable()
export class UserService {
  //constructor() {}
  constructor(
    
    private db: PrismaService,
  ) {}
  async test() {
    const result = await this.db.people.findMany({});
    console.log('result', result);
    return result;
  }
  // async findAll(): Promise<Counters[]> {
  //   return this.counterModel.find();
  // }
  // async readById(): Promise<Counters> {
  //   return await this.counterModel.findById('hotel').exec();
  // }
  // async update(): Promise<Counters> {
  //   return await this.counterModel.findByIdAndUpdate('hotel', {
  //     sequence: 10,
  //   });
  // }
}
