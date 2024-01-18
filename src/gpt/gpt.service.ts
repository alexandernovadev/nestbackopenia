import { prosConsDicusserUseCaseStream } from './use-cases/prosConsDicusserStream.use-case';
import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase, prosConsDicusserUseCase } from './use-cases';
import { OrthographyDto } from './use-cases/dtos/orthography.dto';
import OpenAI from 'openai';
import { ProsConsDiscusserDto } from './use-cases/dtos';
@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(orthographyDto: OrthographyDto) {
    const { prompt } = orthographyDto;

    return await orthographyCheckUseCase(this.openai, {
      prompt,
    });
  }

  async prosConsDicusser({ prompt }: ProsConsDiscusserDto) {
    
    return await prosConsDicusserUseCase(this.openai, { prompt });
  }

  async prosConsDicusserStream({ prompt }: ProsConsDiscusserDto) {
    
    return await prosConsDicusserUseCaseStream(this.openai, { prompt });
  }
}
