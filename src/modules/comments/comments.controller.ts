import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { Comment } from './interface/comment';
import { CommentService } from './comments.service';


@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentService){}

    @Get()
    getComments(@Req() req, @Res() res, err) {
        res.render('index', {comments: this.commentsService.findAll()
        });
    }


    @Post()
    createComment(@Res() res, @Body() comment: Comment) {
        this.commentsService.create(comment);
        res.render('index', {comments: this.commentsService.findAll()
        });
    }
}