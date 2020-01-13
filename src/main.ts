import { environmentDev } from 'environment/environment.dev';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import * as session from 'express-session';
import flash = require('connect-flash');
import * as nunjucks from 'nunjucks';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public/static'));

  const environment = nunjucks.configure(
    [
      join(__dirname, '../public/views'),
    ],
    {
      autoescape: true,
      throwOnUndefined: false,
      trimBlocks: false,
      lstripBlocks: false,
      watch: true,
      noCache: process.env.NODE_ENV === 'local' ? true : false,
      express: app,
    }
  );

  app.engine('njk', environment.render);
  app.setViewEngine('njk');
  app.set('view cache', true);

  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());

  const options = new DocumentBuilder()
    .setTitle('MyWakeboardApp Documentation')
    .setDescription('The MyWakeboardApp description')
    .setVersion(environmentDev.versionNumber || 'NOT DEFINE')
    .addTag('wakeboard')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(environmentDev.port || '3000');
}

bootstrap();
