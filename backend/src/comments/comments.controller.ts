import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { createCommentDto } from './dto/create-comment.dto';
import { updateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private commentsServices: CommentsService) {}

  @Get()
  getAllComments() {
    return this.commentsServices.getAllComments();
  }

  @Get('/:id')
  getComment(@Param('id') id: string) {
    return this.commentsServices.getComment(Number(id));
  }

  @Post()
  createComment(@Body() comment: createCommentDto) {
    return this.commentsServices.createComment(comment);
  }

  @Patch('/:id')
  updateComment(@Param('id') id: string, @Body() comment: updateCommentDto) {
    return this.commentsServices.updateComment(Number(id), comment);
  }

  @Delete('/:id')
  deleteComment(@Param('id') id: string) {
    return this.commentsServices.deleteComment(Number(id));
  }
}
