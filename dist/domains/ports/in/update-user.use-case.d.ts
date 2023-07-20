import { UserEntity } from 'src/domains/entities/user.entity';
import { UpdateUserCommand } from './update-user.command';
export declare const UpdateUserUseCaseSymbol: unique symbol;
export interface UpdateUserUseCase {
    updateUser(command: UpdateUserCommand): Promise<UserEntity>;
}
