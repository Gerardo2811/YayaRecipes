import { IsString, MinLength } from 'class-validator';

export class createCategoryDto {
  @IsString()
  @MinLength(3)
  name: string;
}
