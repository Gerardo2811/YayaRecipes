import { IsInt, IsOptional, IsString } from 'class-validator';

export class updateCommentDto {
  @IsString()
  @IsOptional()
  description: string;
  @IsInt()
  @IsOptional()
  userId: number;
  @IsInt()
  @IsOptional()
  recipeId: number;
}
