import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(userDto: LoginDto): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: userDto.email },
      });

      if (user && (await bcrypt.compare(userDto.password, user.password))) {
        console.log('Validating user:', user.email);
        const { ...result } = user;
        return result;
      }

      return null;
    } catch (error) {
      throw new HttpException(
        'User validation failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Genera el token JWT para el usuario autenticado
  async login(user: User) {
    try {
      const payload = { email: user.email, sub: user.userId };
      const accessToken = this.jwtService.sign(payload);

      return {
        message: 'Login successful',
        access_token: accessToken,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to generate access token',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
