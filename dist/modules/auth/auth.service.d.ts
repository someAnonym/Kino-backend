import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersRepository } from '../users/users.repository';
export interface UserLoginData {
    _doc: {
        _id: string;
    };
}
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    register(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    login(user: UserLoginData): Promise<{
        token: string;
    }>;
}
