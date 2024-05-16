import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';
import { GatewayModule } from './gateway/gateway.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ChatGptModule,
    GatewayModule,
    MongooseModule.forRoot(
      'mongodb+srv://onatpostaci:Xaver1243@xaverdatabase.ohennli.mongodb.net/?retryWrites=true&w=majority&appName=XaverDatabase',
    ),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
