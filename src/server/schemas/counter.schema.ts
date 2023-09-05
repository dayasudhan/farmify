import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountersDocument = Counters & Document;

@Schema()
export class Counters {
  @Prop()
  name: string;

  @Prop()
  _id: string;

  @Prop()
  sequence: number;
}

export const CountersSchema = SchemaFactory.createForClass(Counters);
