import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ControleAlimenticioModule } from './controle-alimenticio/controle-alimenticio.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:cV90YwiWHI12h0iY@cluster0.hd10l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    ControleAlimenticioModule,
  ],
})
export class AppModule {}
