import { ApiProperty } from '@nestjs/swagger';

export class UpdateCardDto {
  reviews: string[];
  likes: number;
  dislikes: number;
  favorites: number;
}
