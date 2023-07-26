import { CommentEntity } from 'src/domains/entities/comment.entity';
export interface CreateCommentDto {
    likes: number;
    user: string;
    dislikes: number;
    title: string;
    date: Date;
    text: string;
    comments: string[];
    complaints: string[];
}
export interface CommentRepositoryPort {
    delete(CommentId: string): any;
    getOneById(id: string): any;
    loadComment(commentId: string): any;
    update(comment: CommentEntity): any;
    getAll(): any;
    create(dto: CreateCommentDto): any;
}
