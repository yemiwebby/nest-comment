import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommentsController } from './comments/comments.controller';
import { CommentService } from './comments/comments.service';

@Module({
  modules: [],
  controllers: [AppController, CommentsController],
  components: [CommentService],
})
export class ApplicationModule {}
