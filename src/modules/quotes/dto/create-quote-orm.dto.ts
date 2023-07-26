import { ApiProperty } from '@nestjs/swagger';

export class CreateQuoteOrmDto {
  @ApiProperty({ default: '' })
  picture: string;

  @ApiProperty({ default: '' })
  text: string;

  @ApiProperty({ default: '' })
  whoseText: string;
}
