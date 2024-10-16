import { IsInt, IsString } from 'class-validator';

export class createCommentDto {
  @IsString()
  description: string;
  @IsInt()
  userId: number;
  @IsInt()
  recipeId: number;
}
