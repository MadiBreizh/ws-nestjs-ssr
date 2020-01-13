import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { ServicesModule } from '../services.module';

@Module({
  imports: [
    PassportModule,
    ServicesModule,
  ],
  providers: [
    AuthService,
    LocalStrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
