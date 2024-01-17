import { Body, Controller } from '@nestjs/common';
import { GptService } from './gpt.service';
import { Post } from '@nestjs/common/decorators';
import { OrthographyDto } from './use-cases/dtos/orthography.dto';
import { ProsConsDiscusserDto } from './use-cases/dtos';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  orthographycheck(@Body() orthographyDto: OrthographyDto) {
    return this.gptService.orthographyCheck(orthographyDto);
  }

  @Post('pros-cons-discusser')
  prosConsDicusser(@Body() prosConsDiscusserDto: ProsConsDiscusserDto) {
    return this.gptService.prosConsDicusser(prosConsDiscusserDto);
  }
}
