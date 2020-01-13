import { Module } from '@nestjs/common';
import { AuthModule } from './services/auth/auth.module';
import { ControllersModule } from './controllers/controllers.module';
import { FixturesModule } from './fixtures/fixtures.module';

@Module({
  imports: [
    AuthModule,
    ControllersModule,
    FixturesModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
