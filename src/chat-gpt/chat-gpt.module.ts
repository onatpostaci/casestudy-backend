import { Module } from '@nestjs/common';
import { ChatGptController } from './chat-gpt.controller';
import { ChatGptService } from './chat-gpt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GptPitchSchema } from './schema/chat-gpt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'GptPitch', schema: GptPitchSchema }]),
  ],
  controllers: [ChatGptController],
  providers: [ChatGptService],
  exports: [ChatGptService],
})
export class ChatGptModule {}
