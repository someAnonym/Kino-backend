import { Genres } from 'src/modules/users/entities/genges.entity';
import { Card } from '../entities/card-orm.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCardOrmDto {
  @ApiProperty({ default: '' })
  posterImage: string;

  @ApiProperty({ default: 'Побег из Претории' })
  name: string;

  @ApiProperty({ default: 'Escape from Pretoria' })
  secondName: string;

  @ApiProperty({
    default:
      'Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.',
  })
  description: string;

  @ApiProperty({ default: [] })
  ratings: string[];

  @ApiProperty({ default: 0 })
  userLike: number;

  @ApiProperty({ default: 0 })
  userDislike: number;

  @ApiProperty({ default: 0 })
  favourites: number;

  @ApiProperty({ default: '' })
  year: string;

  @ApiProperty({ default: '' })
  country: string;

  @ApiProperty({ default: '' })
  slogan: string;

  @ApiProperty({ default: [] })
  directors: string[];

  @ApiProperty({ default: [] })
  screenwriters: string[];

  @ApiProperty({ default: [] })
  producers: string[];

  @ApiProperty({ default: [] })
  operators: string[];

  @ApiProperty({ default: [] })
  composers: string[];

  @ApiProperty({ default: [] })
  artists: string[];

  @ApiProperty({ default: [] })
  editors: string[];

  @ApiProperty({ default: [] })
  genres: Genres[];

  @ApiProperty({ default: 0 })
  collecting: number;

  @ApiProperty({ default: '' })
  premiereInWorld: string;

  @ApiProperty({ default: '' })
  premiereInRussia: string;

  @ApiProperty({ default: 0 })
  age: number;

  @ApiProperty({ default: 0 })
  duration: number;

  @ApiProperty({ default: [] })
  production: string[];

  @ApiProperty({ default: [] })
  specialEffects: string[];

  @ApiProperty({ default: [] })
  dubbingStudios: string[];

  @ApiProperty({ default: [] })
  persons: string[];

  @ApiProperty({ default: [] })
  trailers: string[];

  @ApiProperty({ default: [] })
  awards: string[];

  @ApiProperty({ default: [] })
  posters: string[];

  @ApiProperty({ default: [] })
  shots: string[];

  @ApiProperty({ default: [] })
  sequelAndPrequels: string[];

  @ApiProperty({ default: [] })
  quotes: string[];

  @ApiProperty({ default: [] })
  seemFilms: string[];
}
