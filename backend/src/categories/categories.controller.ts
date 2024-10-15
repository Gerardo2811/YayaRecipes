import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { createCategoryDto } from './dto/create-category.dto';
import { updateCategoryDto } from './dto/update-category.dto.ts';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }
  @Get('/:id')
  getCategory(@Param('id') id: string) {
    return this.categoriesService.getCategory(Number(id));
  }

  @Post()
  createCategory(@Body() category: createCategoryDto) {
    return this.categoriesService.createCategory(category);
  }

  @Patch('/:id')
  updateCategory(@Body() category: updateCategoryDto, @Param('id') id: string) {
    return this.categoriesService.updateCategory(Number(id), category);
  }

  @Delete('/:id')
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(Number(id));
  }
}
