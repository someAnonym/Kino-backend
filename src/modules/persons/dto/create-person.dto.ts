import { ApiProperty } from '@nestjs/swagger';
import { Genres } from 'src/modules/users/entities/genges.entity';

export class CreatePersonOrmDto {
  @ApiProperty({ default: '' })
  name: string;

  @ApiProperty({ default: '' })
  englishName: string;

  @ApiProperty({ default: '' })
  avatarImage: string;

  @ApiProperty({ default: '' })
  linkToBiography: string;

  @ApiProperty({ default: [] })
  career: string[];

  @ApiProperty({ default: '' })
  height: string;

  @ApiProperty({ default: [] })
  birthday: string[];

  @ApiProperty({ default: '' })
  bornPlace: string;

  @ApiProperty({ default: [] })
  genres: Genres[];

  @ApiProperty({ default: [] })
  totalCountOfFilmsAndYears: string[];

  @ApiProperty({ default: 0 })
  favorites: number;

  @ApiProperty({ default: [] })
  awards: string[];

  @ApiProperty({ default: [] })
  bestFilms: string[];

  @ApiProperty({ default: [] })
  lastNews: string[];

  @ApiProperty({ default: [] })
  photos: string[];

  @ApiProperty({ default: [] })
  films: string[];

  @ApiProperty({ default: [] })
  comments: string[];
}
