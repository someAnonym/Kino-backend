import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ default: 'test@test.test' })
  email: string;
  @ApiProperty({ default: 'vk.com' })
  vk: string;
  @ApiProperty({ default: 'facebook.com' })
  facebook: string;
  @ApiProperty({ default: 'instagram.com' })
  instagram: string;
  @ApiProperty({ default: 'twitter.com' })
  twitter: string;
  @ApiProperty({ default: 'youtube.com' })
  youtube: string;
  @ApiProperty({ default: 'Дмитрий' })
  name: string;
  @ApiProperty({ default: 'Foki' })
  secondName: string;
  @ApiProperty({ default: 'he he' })
  aboutMe: string;
  @ApiProperty({ default: '' })
  avatarImage: string;
  @ApiProperty({ default: 'man' })
  gender: string;
  @ApiProperty({ default: '15.11.2004' })
  birthday: string;
  @ApiProperty({ default: 'Moskow' })
  city: string;
  @ApiProperty({ default: 'Russia' })
  country: string;
  @ApiProperty({ default: [] })
  favoriteGenres: string[];
  @ApiProperty({ default: '' })
  person: string;
  @ApiProperty({ default: '' })
  favoriteFilm: string;
  @ApiProperty({ default: '' })
  likedFilm: string;
  @ApiProperty({ default: '' })
  dislikedFilm: string;
}
