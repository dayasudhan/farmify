import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type VendorDocument = VendorInfoSchema & Document;
//Schema
class Hotel {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  logo: string;

  @Prop()
  id: string;
}
@Schema()
export class VendorInfoSchema {
  @Prop({ type: Hotel })
  hotel: Hotel;

  // menu: [
  //   {
  //     name: String;
  //     price: Number;
  //     availability: Number;
  //     timings: Number;
  //     description: String;
  //     logo: String;
  //   },
  // ];
  // address: {
  //   addressLine1: String;
  //   addressLine2: String;
  //   street: String;
  //   LandMark: String;
  //   areaName: String;
  //   city: String;
  //   zip: String;
  //   latitude: Number;
  //   longitude: Number;
  // };
  // @Prop()
  // phone: Number;
  // @Prop()
  // vegornoveg: String;
  // @Prop()
  // speciality: String;
  // @Prop()
  // deliverRange: Number;
  // @Prop()
  // deliverAreas: [{ name: String; isBulkAreaOnly: Number }];
  // @Prop()
  // deliverCharge: Number;
  // @Prop()
  // deliveryTime: Number;
  // @Prop()
  // minimumOrder: Number;
  // @Prop()
  // rating: Number;
  // @Prop()
  // uniqueid: String;
  // @Prop()
  // isOpen: Number;
  // // @Prop()
  // // orderAcceptTimings: {
  // //   Morning: { startTime: String; endTime: String; available: String };
  // //   Lunch: { startTime: String; endTime: String; available: String };
  // //   Dinner: { startTime: String; endTime: String; available: String };
  // // };
  // @Prop()
  // isBulkVendor: Number;
  // @Prop()
  // bulkdeliverCharge: Number;
  // @Prop()
  // bulkdeliverRange: Number;
  // @Prop()
  // bulkminimumOrder: Number;
  // @Prop()
  // bulkdeliveryTime: Number;
}

export const Vendorchema = SchemaFactory.createForClass(VendorInfoSchema);
// //Model
// const VendorInfoModel = mongoose.model('VendorInfoSchema', VendorInfoSchema);

// module.exports = VendorInfoModel;
