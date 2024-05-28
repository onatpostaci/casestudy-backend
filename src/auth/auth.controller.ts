import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtGuard } from './guards/jwt.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  //In constructor, we should inject our auth service to use in the REST methods
  constructor(private authService: AuthService) {}

  //When user wants to authenticate itself, it will POST the data to the MongoDB Cloud first
  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    console.log('Controller POST login Invoked.');
    return req.user;
  }

  //Get the status of the user with the JWT based strategy
  @Get('status')
  @UseGuards(JwtGuard)
  status(@Req() req: Request){
    console.log('Inside AuthController status method')
    return req.user;
  }

}
