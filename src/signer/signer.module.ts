import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SignerService } from './signer.service';
import { SignerController } from './signer.controller';
import { Signer, SignerSchema } from './signner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Signer.name, schema: SignerSchema }]),
  ],
  controllers: [SignerController],
  providers: [SignerService],
})
export class SignerModule {}
