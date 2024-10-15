import { IsEmail, IsOptional, IsString } from 'class-validator';

export class updateUserDto {
  @IsString()
  @IsOptional()
  fullName: string;
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  password: string;
  @IsString()
  @IsOptional()
  bio: string;
  @IsString()
  @IsOptional()
  profilePic: string;
}
