import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSignerDto } from './dto/create-signer.dto';
import { UpdateSignerDto } from './dto/update-signer.dto';
import { Signer, SignerDocument } from './signner.schema';

@Injectable()
export class SignerService {
  constructor(
    @InjectModel(Signer.name) private signerModel: Model<SignerDocument>,
  ) {}

  async create(createSignerDto: CreateSignerDto) {
    const newSigner = new this.signerModel(createSignerDto);
    return newSigner.save();
  }

  async findAll() {
    return this.signerModel.find().exec();
  }

  async findOne(id: number) {
    console.log(id, 'este es el id del signer');
    return await this.signerModel.findOne({ _id: id });
  }

  async update(id: number, updateSignerDto: UpdateSignerDto) {
    return await this.signerModel.findByIdAndUpdate(id, updateSignerDto, {
      new: true,
    });
  }

  async remove(id: number) {
    return await this.signerModel.findByIdAndRemove(id);
  }
}
