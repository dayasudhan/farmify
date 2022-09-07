import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommonModule } from './../common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Counters, CountersSchema } from '../schemas/counter.schema';
@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([
      { name: Counters.name, schema: CountersSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class BuyerModule {}
