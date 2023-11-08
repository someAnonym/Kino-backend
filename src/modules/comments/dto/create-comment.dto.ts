import { ApiProperty } from '@nestjs/swagger';

export class createCommentOrmDto {
  @ApiProperty({ default: '' })
  user: string;

  @ApiProperty({ default: 0 })
  likes: number;

  @ApiProperty({ default: 0 })
  dislikes: number;

  @ApiProperty({ default: '' })
  text: string;

  @ApiProperty({ default: Date.now() })
  date: Date;

  @ApiProperty({ default: [] })
  comments: string[];

  @ApiProperty({ default: [] })
  complaints: string[];
}
