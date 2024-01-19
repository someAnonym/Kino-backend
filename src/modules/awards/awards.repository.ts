import { Injectable } from '@nestjs/common';
import { CreateAwardOrmDto } from './dto/create-award.dto';
import { Model } from 'mongoose';
import { Award, AwardDocument } from './entities/award.entity';
import { InjectModel } from '@nestjs/mongoose';
import { AwardRepositoryPort } from 'src/domains/ports/out/award-repository.port';

@Injectable()
export class AwardsRepository implements AwardRepositoryPort {
  constructor(
    @InjectModel(Award.name)
    private repository: Model<AwardDocument>,
  ) {}

  getAll() {
    return this.repository.find();
  }

  create(dto: CreateAwardOrmDto) {
    return this.repository.create(dto);
  }

  deleteAward(id: string) {
    return this.repository.findByIdAndDelete(id);
  }

  getOneById(id: string) {
    return this.repository.findById(id);
  }
}
