import { IsInt, IsOptional, IsString, MinLength } from 'class-validator';

export class createRecipeDto {
  @IsString()
  @MinLength(3)
  title: string;
  @IsString()
  description: string;
  @IsString()
  preparation: string;
  @IsInt()
  cookingTime: number;
  @IsInt()
  servings: number;
  @IsString()
  @IsOptional()
  imageUrl: string;
  @IsInt()
  categoryId: number;
  @IsInt()
  userId: number;
}
