import { UsersRepository } from 'src/modules/users/users.repository';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    validate(payload: any): Promise<{
        id: any;
    }>;
}
export {};
