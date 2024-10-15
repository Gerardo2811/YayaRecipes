import { IsEmail, IsOptional, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  fullName: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  @IsOptional()
  bio: string;
  @IsString()
  @IsOptional()
  profilePic: string;
}
