import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    try {
      const users = await this.prisma.user.findMany();
      return { message: 'Users retrieved successfully', data: users };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUser(userId: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { userId },
      });
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'User retrieved successfully', data: user };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createUser(user: createUserDto) {
    try {
      const createdUser = await this.prisma.user.create({
        data: {
          fullName: user.fullName,
          email: user.email,
          password: user.password,
          bio: user.bio,
          profilePic: user.profilePic,
        },
      });
      return { message: 'User created succesufly', data: createdUser };
    } catch (error) {
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateUser(userId: number, updateData: Partial<updateUserDto>) {
    try {
      const updatedUser = await this.prisma.user.update({
        where: { userId },
        data: updateData,
      });
      if (!updatedUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'User updated succesfuly', data: updatedUser };
    } catch (error) {
      throw new HttpException(
        'Failed to update user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteUser(userId: number) {
    try {
      const deletedUser = await this.prisma.user.delete({ where: { userId } });
      if (!deletedUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to delete user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
