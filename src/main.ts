import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

//Starting up the project here
async function bootstrap() {
  //It creates a nest application using the nest factory
  //We pass the root of the application AppModule
  const app = await NestFactory.create(AppModule);
  //ToDo make this configurable
  await app.listen(process.env.APP_PORT);
}

bootstrap();
