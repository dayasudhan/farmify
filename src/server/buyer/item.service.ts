import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { VendorDocument, VendorInfoSchema } from '../schemas/vendor.schema';
//var VendorInfoModel = require('../app/models/vendorInfo');
@Injectable()
export class ItemService {
  constructor(
    @InjectModel(VendorInfoSchema.name)
    private vendorModel: Model<VendorDocument>,
  ) {}

  async findAll(): Promise<VendorInfoSchema[]> {
    return await this.vendorModel.find();
  }
  async findById(): Promise<VendorInfoSchema> {
    return await this.vendorModel.findById('6319d2da38ca533b2ca1ee05').exec();
  }
  async findOne(email): Promise<VendorInfoSchema> {
    return await this.vendorModel.findOne({ 'hotel.email': email });
  }
  async findMenuAll(): Promise<VendorInfoSchema[]> {
    return await this.vendorModel.find({}, 'menu');
  }
  // async readById(): Promise<Counters> {
  //   return await this.counterModel.findById('hotel').exec();
  // }
  // async update(): Promise<Counters> {
  //   return await this.counterModel.findByIdAndUpdate('hotel', {
  //     sequence: 10,
  //   });
  // }
}
