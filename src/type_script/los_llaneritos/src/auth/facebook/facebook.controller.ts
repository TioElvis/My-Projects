import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';

@Controller('auth/facebook')
export class FacebookController {
  @Get()
  @UseGuards(AuthGuard('facebook'))
  async call(@Req() req) {}

  @Get('/callback')
  @UseGuards(AuthGuard('facebook'))
  async callback(@Req() req: Request) {
    const { user } = req;
    return user;
  }
}
