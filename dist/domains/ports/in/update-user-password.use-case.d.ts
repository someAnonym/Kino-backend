import { UserEntity } from 'src/domains/entities/user.entity';
import { UpdateUserPasswordCommand } from './update-user-password.command';
export declare const UpdateUserPasswordUseCaseSymbol: unique symbol;
export interface UpdateUserPasswordUseCase {
    updateUserPassword(command: UpdateUserPasswordCommand): Promise<UserEntity>;
}
