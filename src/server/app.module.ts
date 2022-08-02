import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from './modules/view/view.module';
import { CommonModule } from './common/common.module';
import { BuyerModule } from './buyer/buyer.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [CommonModule, BuyerModule, ViewModule],
  controllers: [],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
//9449686314
export class AppModule {}
