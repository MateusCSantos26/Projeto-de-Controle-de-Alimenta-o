import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ControleAlimenticioModule } from './controle-alimenticio/controle-alimenticio.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/controle-alimenticio'),
    ControleAlimenticioModule,
  ],
})
export class AppModule {}
