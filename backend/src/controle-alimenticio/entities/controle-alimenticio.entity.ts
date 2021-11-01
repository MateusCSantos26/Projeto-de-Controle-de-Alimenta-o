import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ControleAlimenticioDocument = ControleAlimenticio & Document;

@Schema()
export class ControleAlimenticio {
  @Prop()
  alimento: string;

  @Prop()
  caloria: number;

  @Prop()
  user_id: string;
}

export const ControleAlimenticioSchema =
  SchemaFactory.createForClass(ControleAlimenticio);
