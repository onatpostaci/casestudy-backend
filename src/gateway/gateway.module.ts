import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { ChatGptModule } from '../chat-gpt/chat-gpt.module';

@Module({
  imports: [ChatGptModule],
  providers: [AppGateway],
})
export class GatewayModule {}
