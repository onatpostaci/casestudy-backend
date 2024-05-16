import {
  ConnectedSocket,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatGptService } from '../chat-gpt/chat-gpt.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private chatGptService: ChatGptService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('requestPitch')
  async handleRequestPitch(
    @MessageBody() data: { city: string },
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    try {
      const pitch = await this.chatGptService.generatePitchAndSave(data.city);
      client.emit('pitchUpdate', pitch);
    } catch (error) {
      console.error('Error processing pitch request:', error);
      if (client) {
        client.emit('error', `Error generating pitch: ${error.message}`);
      } else {
        console.error('Client socket is undefined.');
      }
    }
  }
}
