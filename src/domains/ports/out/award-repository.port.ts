import { AwardEntity } from 'src/domains/entities/award.entity';

export interface CreateAwardDto {
  picture: string;
  name: string;
  description: string;
  year: number;
}

export interface AwardRepositoryPort {
  deleteAward(awardId: string);
  getOneById(id: string);
  getAll();
  create(dto: CreateAwardDto);
}
