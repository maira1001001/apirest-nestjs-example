import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SignerClass extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  publicKey: string;
}

export type SignerDocument = SignerClass & Document;

export const Signer = SchemaFactory.createForClass(SignerClass);
