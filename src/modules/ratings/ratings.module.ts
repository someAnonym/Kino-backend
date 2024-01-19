import { Module } from '@nestjs/common';
import { RatingsController } from './ratings.controller';
import { RatingsRepository } from './ratings.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Rating, RatingSchema } from './entities/rating-orm.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Rating.name, schema: RatingSchema }])],
  controllers: [RatingsController],
  providers: [RatingsRepository],
})
export class RatingsModule {}
