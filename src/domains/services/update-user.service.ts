import { UserEntity } from '../entities/user.entity';
import { UpdateUserCommand } from '../ports/in/update-user.command';
import { UpdateUserUseCase } from '../ports/in/update-user.use-case';
import { UserRepositoryPort } from '../ports/out/user-repository.port';

export class UpdateUserService implements UpdateUserUseCase {
  constructor(private readonly _userRepository: UserRepositoryPort) {}

  async updateUser(command: UpdateUserCommand): Promise<UserEntity> {
    const user = await this._userRepository.loadUser(command.userId);

    user.updateAboutMe(command.aboutMe);
    user.updateUserAvatar(command.avatarImage);
    user.updateFacebook(command.facebook);
    user.updateTwitter(command.twitter);
    user.updateInstagram(command.instagram);
    user.updateVk(command.vk);
    user.updateYoutube(command.youtube);
    user.updateUserEmail(command.email);
    user.updateName(command.name);
    user.updateSecondName(command.secondName);
    user.updateGender(command.gender);
    user.updateBirthday(command.birthday);
    user.updateCity(command.city);
    user.updateCountry(command.country);
    user.updateGenres(command.favoriteGenres);
    user.updatePersons(command.person);
    user.updateFavoriteFilms(command.favoriteFilm);
    user.updateLikedFilms(command.likedFilm);
    user.updateDislikedFilms(command.dislikedFilm);
    user.updateDislikedComments(command.dislikedComment);
    user.updateLikedComments(command.likedComment);
    user.updateDislikedReviews(command.dislikedReview);
    user.updateLikedReviews(command.likedReview);

    await this._userRepository.updateUser(user);
    return user;
  }
}
