import { UserEntity } from 'src/domains/entities/user.entity';
import { User } from './entities/user-orm.entity';
import { ObjectId } from 'mongodb';
type UserData = {
    _id: ObjectId;
} & User;
export declare class UserMapper {
    static mapToDomain(user: UserData): UserEntity;
}
export {};
