import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';


@Injectable()
export class EnquiryService {

  constructor(
    private db: PrismaService,
  ) {}
  async getAllEnquiries() {
    const result = await this.db.enquiry.findMany({
      include:{
        item:true
      }
    });
    console.log('result', result);
    return result;
  }
  async getEnquiry(id) {
    const result = await this.db.enquiry.findUnique({
      where: {
        id,
      },
    });
    console.log('result', result);
    return result;
  }
  async  insertEnuiry(data) {
    console.log("insertItem data",data)
    const item = await this.db.enquiry.create({
      data: {
        name: data.name,
        phone: data.phone,
        email:"",
        createdAt:new Date(),
        updatedAt:new Date(),
        itemId: parseInt(data.itemId),
        address1:data.address,
        // address2:data.address2,
        city:data.city,
        state:data.state,
        zipCode:data.zipcode
      },
    });
    return item;
  }
}
