import { UserEntity } from 'src/domains/entities/user.entity';
import { User } from './entities/user-orm.entity';
import { PersonEntity } from 'src/domains/entities/person.entity';
import { ObjectId } from 'mongodb';

type UserData = { _id: ObjectId } & User;

export class UserMapper {
  static mapToDomain(user: UserData): UserEntity {
    const id = user._id.valueOf() as string;
    const friends = user.friends.map((i) => i.valueOf() as string);
    const reviews = user.reviews.map((i) => i.valueOf() as string);
    const comments = user.comments.map((i) => i.valueOf() as string);
    const likedComments = user.likedComments.map((i) => i.valueOf() as string);
    const dislikedComments = user.dislikedComments.map((i) => i.valueOf() as string);
    const likedReviews = user.likedReviews.map((i) => i.valueOf() as string);
    const dislikedReviews = user.dislikedReviews.map((i) => i.valueOf() as string);
    const likedFilms = user.likedFilms.map((i) => i.valueOf() as string);
    const dislikedFilms = user.dislikedFilms.map((i) => i.valueOf() as string);
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
      friends,
      favoriteFilms,
      persons,
      reviews,
      comments,
      likedFilms,
      dislikedFilms,
      likedComments,
      dislikedComments,
      likedReviews,
      dislikedReviews,
      user.avatarImage,
    );
  }
}
