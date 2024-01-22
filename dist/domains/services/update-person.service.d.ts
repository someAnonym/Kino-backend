import { PersonEntity } from '../entities/person.entity';
import { UpdatePersonCommand } from '../ports/in/update-person.command';
import { PersonsRepositoryPort } from '../ports/out/person-repository.port';
export declare class UpdatePersonService {
    private readonly _personRepositoryPort;
    constructor(_personRepositoryPort: PersonsRepositoryPort);
    updatePerson(command: UpdatePersonCommand): Promise<PersonEntity>;
}
