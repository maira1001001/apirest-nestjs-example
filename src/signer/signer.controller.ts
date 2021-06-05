import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SignerService } from './signer.service';
import { CreateSignerDto } from './dto/create-signer.dto';
import { UpdateSignerDto } from './dto/update-signer.dto';
import { Signer } from './signer.interface';

@Controller('signer')
export class SignerController {
  constructor(private readonly signerService: SignerService) {}

  @Post()
  create(@Body() createSignerDto: CreateSignerDto) {
    return this.signerService.create(createSignerDto);
  }

  @Get()
  findAll(): Promise<Signer[]> {
    return this.signerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Signer> {
    return this.signerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSignerDto: UpdateSignerDto,
  ): Promise<Signer> {
    return this.signerService.update(id, updateSignerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Signer> {
    return this.signerService.remove(id);
  }
}
