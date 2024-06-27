import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    HttpModule.register({
      baseURL: 'https://9313200562mr.amocrm.ru',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
