import {Component, OnModuleInit } from '@nestjs/common';
import { Comment } from './interface/comment';

@Component()
export class CommentService implements OnModuleInit {
    private comments: Comment[] = []

    onModuleInit() {
        const Pusher = require('pusher-js');
        let pusher = new Pusher('e6c6d225b2ca71968dcc', {
            cluster: 'eu',
            encrypted: true
        });
    
        const channel = pusher.subscribe('comment');
        channel.bind('comment_data', data => {
            this.comments.push(data);
            console.log(data);
        });
    }

    create(comment: Comment) {
        const Pusher = require('pusher');
        
        var pusher = new Pusher({
            appId: '410534',
            key: 'e6c6d225b2ca71968dcc',
            secret: '6544eaa9a784f0b0642b',
            cluster: 'eu',
            encrypted: true
          });
    
          pusher.trigger('comment', 'comment_data', comment);
    }

    findAll(): Comment[] {
        return this.comments;
    }
}