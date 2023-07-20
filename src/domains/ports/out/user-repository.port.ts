import { UserEntity } from 'src/domains/entities/user.entity';

interface CreateUserDto {
  email: string;
  name: string;
  secondName: string;
  password: string;
}

export interface UserRepositoryPort {
  updateUser(user: UserEntity);
  loadUser(userId: string): Promise<UserEntity>;
  findById(id: string);
  findByEmail(email: string);
  create(dto: CreateUserDto);
}
