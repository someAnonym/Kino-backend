import { UserEntity } from '../entities/user.entity';
import { UpdateUserCommand } from '../ports/in/update-user.command';
import { UpdateUserUseCase } from '../ports/in/update-user.use-case';
import { UserRepositoryPort } from '../ports/out/user-repository.port';
export declare class UpdateUserService implements UpdateUserUseCase {
    private readonly _userRepository;
    constructor(_userRepository: UserRepositoryPort);
    updateUser(command: UpdateUserCommand): Promise<UserEntity>;
}
