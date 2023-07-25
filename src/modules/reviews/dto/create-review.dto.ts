import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewOrmDto {
  @ApiProperty({ default: '' })
  user: string;

  @ApiProperty({ default: '' })
  typeOfReview: string;

  @ApiProperty({ default: 0 })
  likes: number;

  @ApiProperty({ default: 0 })
  dislikes: number;

  @ApiProperty({ default: '' })
  title: string;

  @ApiProperty()
  date: Date;

  @ApiProperty({ default: '' })
  text: string;

  @ApiProperty({ default: [] })
  comments: string[];

  @ApiProperty({ default: [] })
  complaints: string[];
}
