import { ObjectId } from 'mongodb';
import { Award } from './entities/award.entity';
import { AwardEntity } from 'src/domains/entities/award.entity';
type AwardData = {
    _id: ObjectId;
} & Award;
export declare class AwardMapper {
    static mapToDomain(award: AwardData): AwardEntity;
}
export {};
