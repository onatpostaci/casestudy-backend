import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { Model } from 'mongoose';
import { GptPitchDocument } from './schema/chat-gpt.schema';
import { InjectModel } from '@nestjs/mongoose';

type NewPitch = {
  city: string;
  pitch: string;
  createdAt: string;
};

@Injectable()
export class ChatGptService {
  //properties
  private readonly openai: OpenAI;

  /**
   * Constructor to initialize the openai api
   * GptModel is injected to store it in MongoDB
   */
  constructor(
    @InjectModel('GptPitch') private gptPitchModel: Model<GptPitchDocument>,
  ) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  /**
   * Generates a cpitch for the cities entered as prompt
   *
   * @param prompt The input string from the user to generate a response for.
   * @param model The model to be used for generating responses. Default is "gpt-3.5-turbo".
   * @returns The generated Promise response object from the GPT model.
   */
  async generatePitchAndSave(
    prompt: string,
    model: string = 'gpt-3.5-turbo',
  ): Promise<NewPitch> {
    try {
      const chatCompletion = await this.openai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content:
              'Generate a short pitch on ' +
              prompt +
              ' pointing out the unique features of the city.',
          },
        ],
        model: model,
      });
      const newPitch = new this.gptPitchModel({
        city: prompt,
        pitch: chatCompletion.choices[0].message.content.trim(),
        createdAt: new Date().toLocaleDateString(),
      });
      //Save the pitch in MongoDB
      const savedPitch = await newPitch.save();
      return savedPitch;
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      throw new Error(`Failed to generate response: ${error.message}`);
    }
  }

  /**
   * Retrieves all pitches from the database.
   * @returns An array of all pitch documents.
   */
  async getAllPitches(): Promise<GptPitchDocument[]> {
    try {
      //Find all pitches from the Mongo COllection
      const pitches = await this.gptPitchModel.find().exec();
      return pitches.reverse();
    } catch (error) {
      console.error('Failed to retrieve pitches:', error);
      throw new Error(`Failed to retrieve data: ${error.message}`);
    }
  }
}
