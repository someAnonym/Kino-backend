import { UserEntity } from 'src/domains/entities/user.entity';
import { User } from './entities/user-orm.entity';
import { PersonEntity } from 'src/domains/entities/person.entity';
import { ObjectId } from 'mongodb';

type UserData = { _id: ObjectId } & User;

export class UserMapper {
  static mapToDomain(user: UserData): UserEntity {
    const id = user._id.valueOf() as string;
    const friends = user.friends.map((i) => i.valueOf() as string);
    const likedFilms = user.likedFilms.map((i) => i.valueOf() as string);
    const dislikedFilms = user.dislikedFilms.map((i) => i.valueOf() as string);
    const films = user.films.map((i) => i.valueOf() as string);
    const expectedFilms = user.expectedFilms.map((i) => i.valueOf() as string);
    const favoriteFilms = user.favoriteFilms.map((i) => i.valueOf() as string);
    const persons = user.persons.map((i) => i.valueOf() as string);
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
      films,
      friends,
      favoriteFilms,
      expectedFilms,
      persons,
      user.favoritePersons,
      user.reviews,
      user.comments,
      likedFilms,
      dislikedFilms,
      user.avatarImage,
      user.wasOnline,
    );
  }
}
