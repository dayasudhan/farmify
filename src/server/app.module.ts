import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from './modules/view/view.module';
import { CommonModule } from './common/common.module';
import { BuyerModule } from './buyer/buyer.module';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CommonModule,
    BuyerModule,
    ViewModule,
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/farm'),
    
  ],
  controllers: [],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
//9449686314
export class AppModule {}
