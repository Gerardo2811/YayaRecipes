import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { createRecipeDto } from './dto/create-recipe.dto';
import { updateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private recipeService: RecipesService) {}

  @Get()
  getAllRecipes() {
    return this.recipeService.getAllRecipes();
  }

  @Get('/:id')
  getRecipe(@Param('id') id: string) {
    return this.recipeService.getRecipe(Number(id));
  }

  @Post()
  createRecipe(@Body() recipe: createRecipeDto) {
    return this.recipeService.createRecipe(recipe);
  }

  @Patch('/:id')
  updateRecipe(@Param('id') id: string, @Body() recipe: updateRecipeDto) {
    return this.recipeService.updateRecipe(Number(id), recipe);
  }

  @Delete('/:id')
  deleteRecipe(@Param('id') id: string) {
    return this.recipeService.deleteRecipe(Number(id));
  }
}
