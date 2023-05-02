import { Module } from '@nestjs/common';
import { FacebookController } from './facebook.controller';
import { FacebookStrategy } from 'src/strategies/auth/facebook.strategy';

@Module({
  controllers: [FacebookController],
  providers: [FacebookStrategy],
})
export class FacebookModule {}
