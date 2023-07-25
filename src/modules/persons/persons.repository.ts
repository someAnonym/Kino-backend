import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  CreatePersonDto,
  PersonsRepositoryPort,
} from 'src/domains/ports/out/person-repository.port';
import { Person, PersonDocument } from './entities/person-orm.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PersonEntity } from 'src/domains/entities/person.entity';
import { PersonMapper } from './person.mapper';

@Injectable()
export class PersonsRepository implements PersonsRepositoryPort {
  constructor(
    @InjectModel(Person.name)
    private repository: Model<PersonDocument>,
  ) {}

  async update(person: PersonEntity) {
    try {
      const updatedPerson = person.getData();
      const currentPerson = await this.repository.findById(person.id);

      currentPerson.comments = updatedPerson.comments;

      return this.repository.findOneAndUpdate(currentPerson._id, currentPerson);
    } catch (error) {
      throw new ForbiddenException('Ошибка при обновлении Актера', error);
    }
  }

  delete(PersonId: string) {
    return this.repository.findByIdAndDelete(PersonId);
  }

  getAll() {
    return this.repository.find();
  }

  getOneById(id: string) {
    return this.repository.findById(id);
  }

  create(dto: CreatePersonDto) {
    return this.repository.create(dto);
  }

  async loadPerson(personId: string): Promise<PersonEntity> {
    const person = await this.repository.findById(personId);

    return PersonMapper.mapToDomain(person);
  }
}
