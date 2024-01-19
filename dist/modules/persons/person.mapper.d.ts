import { PersonEntity } from 'src/domains/entities/person.entity';
import { Person } from './entities/person-orm.entity';
import { ObjectId } from 'mongodb';
type PersonData = {
    _id: ObjectId;
} & Person;
export declare class PersonMapper {
    static mapToDomain(person: PersonData): PersonEntity;
}
export {};
