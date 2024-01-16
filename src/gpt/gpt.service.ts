import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './use-cases/dtos/orthography.dto';
import OpenAI from 'openai';
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
}
