import { Body, Controller, HttpException, Post, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  //In constructor, we should inject our auth service to use in the REST methods
  constructor(private authService: AuthService) {}

  //When user wants to authenticate itself, it will POST the data to the MongoDB Cloud first
  @Post('login')
  @UseGuards(LocalGuard)
  login(@Body() authPayload: AuthPayloadDto) {
    const responseUser = this.authService.validateUser(authPayload);
    return responseUser;
  }
}
