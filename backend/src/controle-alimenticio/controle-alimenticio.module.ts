import { Module } from '@nestjs/common';
import { ControleAlimenticioService } from './controle-alimenticio.service';
import { ControleAlimenticioController } from './controle-alimenticio.controller';
import {
  ControleAlimenticioSchema,
  ControleAlimenticio,
} from './entities/controle-alimenticio.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ControleAlimenticio.name, schema: ControleAlimenticioSchema },
    ]),
  ],
  controllers: [ControleAlimenticioController],
  providers: [ControleAlimenticioService],
})
export class ControleAlimenticioModule {}
