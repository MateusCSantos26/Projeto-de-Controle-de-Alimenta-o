import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateControleAlimenticioDto } from './dto/create-controle-alimenticio.dto';
import {
  ControleAlimenticio,
  ControleAlimenticioDocument,
} from './entities/controle-alimenticio.entity';

@Injectable()
export class ControleAlimenticioService {
  constructor(
    @InjectModel(ControleAlimenticio.name)
    private controleAlimenticioModel: Model<ControleAlimenticioDocument>,
  ) {}

  create(createControleAlimenticioDto: CreateControleAlimenticioDto) {
    const controleAlimenticio = new this.controleAlimenticioModel(
      createControleAlimenticioDto,
    );
    console.log('AQUII', controleAlimenticio, createControleAlimenticioDto);
    return controleAlimenticio.save();
  }

  findAll() {
    return this.controleAlimenticioModel.find();
  }

  remove(id: string) {
    console.log('consoleeeee', id);
    return this.controleAlimenticioModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
