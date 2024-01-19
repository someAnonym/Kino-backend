import { InjectModel } from '@nestjs/mongoose';
import { Rating, RatingDocument } from './entities/rating-orm.entity';
import { Model } from 'mongoose';
import {
  CreateRatingDto,
  RatingRepositoryPort,
} from 'src/domains/ports/out/rating-repository.port';

export class RatingsRepository implements RatingRepositoryPort {
  constructor(
    @InjectModel(Rating.name)
    private readonly repository: Model<RatingDocument>,
  ) {}

  createRating(dto: CreateRatingDto) {
    return this.repository.create(dto);
  }

  deleteRating(id: string) {
    return this.repository.findByIdAndDelete(id);
  }

  getRatingById(id: string) {
    return this.repository.findById(id);
  }

  getAll() {
    return this.repository.find();
  }
}
