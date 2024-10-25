import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log('Received login request:', loginDto);

    if (!loginDto.email || !loginDto.password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = await this.authService.validateUser(loginDto);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    return this.authService.login(user);
  }
}
