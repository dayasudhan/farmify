import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ItemService } from './item.service';
import { CommonModule } from './../common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Counters, CountersSchema } from '../schemas/counter.schema';
import { VendorDocument, VendorInfoSchema } from '../schemas/vendor.schema';
import { Vendorchema } from '../schemas/vendor.schema';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([
      { name: Counters.name, schema: CountersSchema },
      { name: VendorInfoSchema.name, schema: Vendorchema },
    ]),
  ],
  controllers: [UserController,SellerController],
  providers: [UserService, ItemService,SellerService],
})
export class BuyerModule {}
