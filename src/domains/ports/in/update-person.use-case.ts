import { PersonEntity } from 'src/domains/entities/person.entity';
import { UpdatePersonCommand } from './update-person.command';

export const UpdatePersonUseCaseSymbol = Symbol('UpdatePersonUseCase');

export interface UpdatePersonUseCase {
  UpdatePerson(command: UpdatePersonCommand): Promise<PersonEntity>;
}
