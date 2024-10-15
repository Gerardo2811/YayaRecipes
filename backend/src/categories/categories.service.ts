import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma.service';
import { updateCategoryDto } from './dto/update-category.dto.ts';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async getAllCategories() {
    try {
      const categories = await this.prisma.category.findMany();
      return { message: 'Categories retrieved successfully', data: categories };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve categories',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getCategory(categoryId: number) {
    try {
      const category = await this.prisma.category.findUnique({
        where: { categoryId },
      });
      if (!category) {
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'Category retrieved successfully', data: category };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createCategory(category: createCategoryDto) {
    try {
      const newCategory = await this.prisma.category.create({
        data: {
          name: category.name,
        },
      });
      return { message: 'Category created successfully', data: newCategory };
    } catch (error) {
      throw new HttpException(
        'Failed to create category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCategory(
    categoryId: number,
    updateData: Partial<updateCategoryDto>,
  ) {
    try {
      const updatedCategory = await this.prisma.category.update({
        where: { categoryId },
        data: updateData,
      });
      return {
        message: 'Category updated successfully',
        data: updatedCategory,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to update category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteCategory(categoryId: number) {
    try {
      await this.prisma.category.delete({ where: { categoryId } });
      return { message: 'Category deleted successfully' };
    } catch (error) {
      throw new HttpException(
        'Failed to delete category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
