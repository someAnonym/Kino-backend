import { ApiProperty } from '@nestjs/swagger';

export class UpdateCardDto {
  _reviews: string[];
  _likes: number;
  _dislikes: number;
  _favorites: number;
}
