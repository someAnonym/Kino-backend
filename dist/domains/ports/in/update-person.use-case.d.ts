import { PersonEntity } from 'src/domains/entities/person.entity';
import { UpdatePersonCommand } from './update-person.command';
export declare const UpdatePersonUseCaseSymbol: unique symbol;
export interface UpdatePersonUseCase {
    UpdatePerson(command: UpdatePersonCommand): Promise<PersonEntity>;
}
