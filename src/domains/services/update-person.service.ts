import { PersonEntity } from '../entities/person.entity';
import { UpdatePersonCommand } from '../ports/in/update-person.command';
import { PersonsRepositoryPort } from '../ports/out/person-repository.port';

export class UpdatePersonService {
  constructor(private readonly _personRepositoryPort: PersonsRepositoryPort) {}

  async updatePerson(command: UpdatePersonCommand): Promise<PersonEntity> {
    const person = await this._personRepositoryPort.loadPerson(command.personId);

    person.updateComments(command.comments);

    await this._personRepositoryPort.update(person);
    return person;
  }
}
