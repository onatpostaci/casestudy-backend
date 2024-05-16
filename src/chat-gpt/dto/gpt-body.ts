import { IsNotEmpty, IsString } from 'class-validator';

export class GptBodyDto {
  @IsString()
  @IsNotEmpty()
  city: string;
}
