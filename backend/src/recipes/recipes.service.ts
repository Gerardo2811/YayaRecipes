import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createRecipeDto } from './dto/create-recipe.dto';
import { updateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async getAllRecipes() {
    try {
      const recipes = await this.prisma.recipe.findMany();
      return { message: 'Recipes retrieved successfully', data: recipes };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve recipes',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getRecipe(recipeId: number) {
    try {
      const recipe = await this.prisma.recipe.findFirst({
        where: { recipeId },
      });
      if (!recipe) {
        throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'Recipe retrieved successfully', data: recipe };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve recipe',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createRecipe(recipe: createRecipeDto) {
    try {
      const createdRecipe = await this.prisma.recipe.create({
        data: {
          title: recipe.title,
          description: recipe.description,
          preparation: recipe.preparation,
          cookingTime: recipe.cookingTime,
          servings: recipe.servings,
          imageUrl: recipe.imageUrl,
          categoryId: recipe.categoryId,
          userId: recipe.userId,
        },
      });

      return { message: 'Recipe created successfully', data: createdRecipe };
    } catch (error) {
      throw new HttpException(
        'Failed to create recipe',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateRecipe(recipeId: number, updatedData: Partial<updateRecipeDto>) {
    try {
      const updateRecipe = await this.prisma.recipe.update({
        where: { recipeId },
        data: updatedData,
      });

      return { message: 'Recipe updated successfully', data: updateRecipe };
    } catch (error) {
      throw new HttpException(
        'Failed to update recipe',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteRecipe(recipeId: number) {
    try {
      const deletedRecipe = await this.prisma.recipe.delete({
        where: { recipeId },
      });
      if (!recipeId) {
        return new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'Recipe delete successfully', data: deletedRecipe };
    } catch (error) {
      throw new HttpException(
        'Failed to delete recipe',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
