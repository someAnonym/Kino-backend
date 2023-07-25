import { ObjectId } from 'mongodb';
import { Award } from './entities/award.entity';
import { AwardEntity } from 'src/domains/entities/award.entity';

type AwardData = { _id: ObjectId } & Award;

export class AwardMapper {
  static mapToDomain(award: AwardData): AwardEntity {
    const id = award._id.valueOf() as string;

    return new AwardEntity(id, award.picture, award.name, award.description, award.year);
  }
}
