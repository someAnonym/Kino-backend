import { UserEntity } from 'src/domains/entities/user.entity';
interface CreateUserDto {
    email: string;
    name: string;
    secondName: string;
    password: string;
}
export interface UserRepositoryPort {
    updateUser(user: UserEntity): any;
    loadUser(userId: string): Promise<UserEntity>;
    findById(id: string): any;
    findByEmail(email: string): any;
    create(dto: CreateUserDto): any;
}
export {};
