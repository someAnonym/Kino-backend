import { UserEntity } from 'src/domains/entities/user.entity';
import { User } from './entities/user-orm.entity';
import { PersonEntity } from 'src/domains/entities/person.entity';
import { ObjectId } from 'mongodb';

type UserData = { _id: ObjectId } & User;

export class UserMapper {
  static mapToDomain(user: UserData): UserEntity {
    const id = user._id.valueOf() as string;
    const friends = user.friends.map((i) => i.valueOf() as string);
    return new UserEntity(
      id,
      user.email,
      user.password,
      user.name,
      user.secondName,
      user.vk,
      user.instagram,
      user.youtube,
      user.twitter,
      user.facebook,
      user.aboutMe,
      user.gender,
      user.birthday,
      user.country,
      user.city,
      user.favoriteGenres,
      user.films,
      friends,
      user.favoriteFilms,
      user.expectedFilms,
      user.persons,
      user.favoritePersons,
      user.reviews,
      user.comments,
      user.likedFilms,
      user.dislikedFilms,
      user.avatarImage,
      user.wasOnline,
    );
  }
}
