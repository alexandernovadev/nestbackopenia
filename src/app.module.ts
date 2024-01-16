import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GptModule } from './gpt/gpt.module';

@Module({
  imports: [ConfigModule.forRoot(), GptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
