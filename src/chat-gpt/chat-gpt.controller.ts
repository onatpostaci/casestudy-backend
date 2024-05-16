import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';
import { GptBodyDto } from './dto/gpt-body';

@Controller('chat-gpt')
export class ChatGptController {
  constructor(private readonly service: ChatGptService) {}

  @Post('/prompt')
  generatePitch(@Body() data: GptBodyDto) {
    return this.service.generatePitchAndSave(data.city);
  }

  @Get('/pitches')
  getAllPitches() {
    return this.service.getAllPitches();
  }
}
