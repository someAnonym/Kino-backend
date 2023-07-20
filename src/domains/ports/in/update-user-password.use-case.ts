import { UserEntity } from 'src/domains/entities/user.entity';
import { UpdateUserPasswordCommand } from './update-user-password.command';

export const UpdateUserPasswordUseCaseSymbol = Symbol(
  'UpdateUserPasswordUseCaseSymbol',
);

export interface UpdateUserPasswordUseCase {
  updateUserPassword(command: UpdateUserPasswordCommand): Promise<UserEntity>;
}
