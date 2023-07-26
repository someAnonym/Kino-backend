import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domains/entities/user.entity';
import { UserRepositoryPort } from 'src/domains/ports/out/user-repository.port';
import { CreateUserDto } from './dto/create-user.dto';
import { UserMapper } from './user.mapper';
import { User, UserDocument } from './entities/user-orm.entity';
import { Model } from 'mongoose';
import { errorMonitor } from 'events';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersRepository implements UserRepositoryPort {
  constructor(
    @InjectModel(User.name)
    private repository: Model<UserDocument>,
  ) {}

  async loadUser(userId: string): Promise<UserEntity> {
    const user = await this.repository.findById(userId);

    return UserMapper.mapToDomain(user);
  }

  async updateUser(user: UserEntity) {
    try {
      const updatedUser = user.getUserData();
      const currentUser = await this.repository.findById(user.id);

      currentUser.vk = updatedUser.vk;
      currentUser.instagram = updatedUser.instagram;
      currentUser.youtube = updatedUser.youtube;
      currentUser.twitter = updatedUser.twitter;
      currentUser.facebook = updatedUser.facebook;
      currentUser.aboutMe = updatedUser.aboutMe;
      currentUser.name = updatedUser.name;
      currentUser.secondName = updatedUser.secondName;
      currentUser.avatarImage = updatedUser.avatarImage;
      currentUser.password = updatedUser.password;
      currentUser.gender = updatedUser.gender;
      currentUser.birthday = updatedUser.birthday;
      currentUser.city = updatedUser.city;
      currentUser.country = updatedUser.country;

      // return this.repository.updateOne()
      return this.repository.findOneAndUpdate(currentUser._id, currentUser);
      // return currentUser;
    } catch (error) {
      throw new ForbiddenException('Ошибка при обновлении пользователя', error);
    }
  }

  create(dto: CreateUserDto) {
    return this.repository.create(dto);
  }

  findByEmail(email: string) {
    return this.repository.findOne({ email });
  }

  findById(id: string) {
    const user = this.repository.findById(id);
    // console.log(user);

    return user;
  }

  async search(query: string) {
    const users = await this.repository.find();
    return users.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
  }
}
