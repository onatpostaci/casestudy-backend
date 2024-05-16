import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GptPitchDocument = HydratedDocument<GptPitch>;

@Schema()
export class GptPitch {
  @Prop()
  city: string;

  @Prop()
  pitch: string;

  @Prop()
  createdAt: string;
}

export const GptPitchSchema = SchemaFactory.createForClass(GptPitch);
