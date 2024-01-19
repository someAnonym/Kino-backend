import { PersonEntity } from 'src/domains/entities/person.entity';
import { UpdatePersonCommand } from './update-person.command';

export const UpdatePersonUseCaseSymbol = Symbol('UpdatePersonUseCase');

export interface UpdatePersonUseCase {
  updatePerson(command: UpdatePersonCommand): Promise<PersonEntity>;
}
