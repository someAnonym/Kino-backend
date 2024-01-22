import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingOrmDto {
  @ApiProperty({ default: '' })
  rate: string;

  @ApiProperty({ default: '' })
  whoose: string;
}
