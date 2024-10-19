import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createCommentDto } from './dto/create-comment.dto';
import { updateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async getAllComments() {
    try {
      const comments = await this.prisma.comment.findMany();
      return { message: 'Comments retrieved successfully', data: comments };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve comments',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getComment(commentId: number) {
    try {
      const comment = await this.prisma.comment.findUnique({
        where: { commentId },
      });
      if (!comment) {
        throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'Comment retrieved successfully', data: comment };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve comment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createComment(comment: createCommentDto) {
    try {
      const createdComment = await this.prisma.comment.create({
        data: {
          description: comment.description,
          userId: comment.userId,
          recipeId: comment.recipeId,
        },
      });

      return { message: 'Comment created successfully', data: createdComment };
    } catch (error) {
      throw new HttpException(
        'Failed to created comment ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateComment(
    commentId: number,
    updatedData: Partial<updateCommentDto>,
  ) {
    try {
      const updatedComment = await this.prisma.comment.update({
        where: { commentId },
        data: updatedData,
      });

      if (!this.updateComment) {
        throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
      }

      return { message: 'Comment updated successfully', data: updatedComment };
    } catch (error) {
      throw new HttpException(
        'Failed to update comment ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteComment(commentId: number) {
    try {
      const deletedComment = await this.prisma.comment.delete({
        where: { commentId },
      });
      if (!deletedComment) {
        throw new HttpException(' Comment not found ', HttpStatus.NOT_FOUND);
      }
      return { message: 'Comment deleted successfully', data: deletedComment };
    } catch (error) {
      throw new HttpException(
        'Failed to delete comment ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
