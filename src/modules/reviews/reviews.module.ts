import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './entities/review-orm.entity';
import { ReviewController } from './reviews.controller';
import { ReviewsRepository } from './reviews.repository';
import { UpdateReviewUseCaseSymbol } from 'src/domains/ports/in/update-review.use-case';
import { UpdateReviewService } from 'src/domains/services/update-review.service';
import { ReviewRepositoryPort } from 'src/domains/ports/out/review-repository.port';

@Module({
  imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }])],
  controllers: [ReviewController],
  exports: [ReviewsRepository],
  providers: [
    ReviewsRepository,
    {
      provide: UpdateReviewUseCaseSymbol,
      useClass: UpdateReviewService,
    },

    {
      provide: UpdateReviewUseCaseSymbol,
      useFactory: (_reviewRepository: ReviewRepositoryPort) => {
        return new UpdateReviewService(_reviewRepository);
      },
      inject: [ReviewsRepository],
    },
  ],
})
export class ReviewsModule {}
