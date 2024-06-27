import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'node:fs';

async function bootstrap() {
  const httpsOptions = {
    cert: fs.readFileSync('../certificate/cert.pem'),
    key: fs.readFileSync('../certificate/key.pem'),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.setGlobalPrefix('api');
  await app.listen(3000);
}

bootstrap();
