import { ReviewEntity } from 'src/domains/entities/review.entity';
export interface CreateReviewDto {
    readonly user: string;
    readonly typeOfReview: string;
    likes: number;
    dislikes: number;
    readonly title: string;
    readonly date: Date;
    readonly text: string;
    comments: string[];
    readonly complaints: string[];
}
export interface ReviewRepositoryPort {
    delete(reviewId: string): any;
    getOneById(id: string): any;
    update(review: ReviewEntity): any;
    getAll(): any;
    loadReview(reviewId: string): any;
    create(dto: CreateReviewDto): any;
}
