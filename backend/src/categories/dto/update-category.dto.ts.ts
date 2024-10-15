import { IsOptional, IsString, MinLength } from 'class-validator';

export class updateCategoryDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  name: string;
}
