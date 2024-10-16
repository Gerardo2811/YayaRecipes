import { IsInt, IsOptional, IsString, MinLength } from 'class-validator';

export class updateRecipeDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  title: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsString()
  @IsOptional()
  preparation: string;
  @IsInt()
  @IsOptional()
  cookingTime: number;
  @IsInt()
  @IsOptional()
  servings: number;
  @IsString()
  @IsOptional()
  imageUrl: string;
  @IsInt()
  @IsOptional()
  categoryId: number;
  @IsInt()
  @IsOptional()
  userId: number;
}
