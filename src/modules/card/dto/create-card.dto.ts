import { Genres } from 'src/modules/users/entities/genges.entity';
import { Card } from '../entities/card-orm.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCardOrmDto {
  @ApiProperty({ default: '/uploads/89174998154842803430569066277532382.png' })
  backgroundImage: string;

  @ApiProperty({ default: '/uploads/51432660983916184341728439869629537.png' })
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

  @ApiProperty({
    default: [
      '64df2ff7837c1de258ca6692',
      '64df2ff7837c1de258ca6692',
      '64df2ff7837c1de258ca6692',
      '64df2ff7837c1de258ca6692',
    ],
  })
  ratings: string[];

  @ApiProperty({ default: 12 })
  userLike: number;

  @ApiProperty({ default: 6 })
  userDislike: number;

  @ApiProperty({ default: 16 })
  favourites: number;

  @ApiProperty({ default: 2020 })
  year: number;

  @ApiProperty({ default: ['Великобритания', 'Австралия'] })
  country: string[];

  @ApiProperty({ default: 'Подбери ключ к свободе' })
  slogan: string;

  @ApiProperty({ default: ['64d9f7b5e1110cc34cd58ede'] })
  directors: string[];

  @ApiProperty({ default: ['Фрэнсис Аннан', 'Л.Х. Адамс', 'Кэрол Гриффитс'] })
  screenwriters: string[];

  @ApiProperty({ default: ['Фрэнсис Аннан'] })
  producers: string[];

  @ApiProperty({ default: ['Джеффри Холл'] })
  operators: string[];

  @ApiProperty({ default: ['Дэвид Хиршфелдер'] })
  composers: string[];

  @ApiProperty({ default: ['Скотт Бёрд', 'Эрика Брайан', 'Мариот Керр'] })
  artists: string[];

  @ApiProperty({ default: ['Ник Фентон'] })
  editors: string[];

  @ApiProperty({ default: ['Триллер'] })
  genres: string[];

  @ApiProperty({ default: 12808 })
  collecting: number;

  @ApiProperty({ default: '01.03.2020' })
  premiereInWorld: string;

  @ApiProperty({ default: '14.03.2020' })
  premiereInRussia: string;

  @ApiProperty({ default: 16 })
  age: number;

  @ApiProperty({ default: 106 })
  duration: number;

  @ApiProperty({ default: ['Arclight Films', 'Beagle Pug Films', 'Footprint Films'] })
  production: string[];

  @ApiProperty({ default: ['Particular Crowd', 'Premiere Picture', 'Spier Films'] })
  specialEffects: string[];

  @ApiProperty({ default: ['Пифагор'] })
  dubbingStudios: string[];

  @ApiProperty({ default: ['64c0c1852904a766e78609c0'] })
  persons: string[];

  @ApiProperty({ default: ['/uploads/7988628819993576475282367541962714.mp4'] })
  trailers: string[];

  @ApiProperty({
    default: [
      '64d9f7db7d6c1ef5e3d65bd4',
      '64d9f7db7d6c1ef5e3d65bd4',
      '64d9f7db7d6c1ef5e3d65bd4',
      '64d9f7db7d6c1ef5e3d65bd4',
    ],
  })
  awards: string[];

  @ApiProperty({
    default: [
      '/uploads/45329756186953580859923156024825766.png',
      '/uploads/28912643286879964223053830683070.png',
      '/uploads/4822981514169208892977713968467426.png',
    ],
  })
  posters: string[];

  @ApiProperty({
    default: [
      '/uploads/76325089178478378545283465851466884.png',
      '/uploads/402012429376383626756579103542664.png',
      '/uploads/19892496724598274573684352671344099.png',
      '/uploads/4794545304185939391003819855270432.png',
      '/uploads/3131003928685677622127495374128764.png',
      '/uploads/76956913079278755772572442219341792.png',
    ],
  })
  shots: string[];

  @ApiProperty({ default: [] })
  sequelAndPrequels: string[];

  @ApiProperty({ default: ['64d9f6db34bf81ae805a9db8', '64d9f70e34bf81ae805a9dbb'] })
  quotes: string[];

  @ApiProperty({ default: [] })
  seemFilms: string[];
}
