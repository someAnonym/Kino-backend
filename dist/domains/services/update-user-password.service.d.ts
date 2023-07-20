import { UserEntity } from '../entities/user.entity';
import { UpdateUserPasswordCommand } from '../ports/in/update-user-password.command';
import { UpdateUserPasswordUseCase } from '../ports/in/update-user-password.use-case';
import { UserRepositoryPort } from '../ports/out/user-repository.port';
export declare class UpdateUserPasswordService implements UpdateUserPasswordUseCase {
    private readonly _userRepository;
    constructor(_userRepository: UserRepositoryPort);
    updateUserPassword(command: UpdateUserPasswordCommand): Promise<UserEntity>;
}
