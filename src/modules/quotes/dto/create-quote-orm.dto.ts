import { ApiProperty } from '@nestjs/swagger';

export class CreateQuoteOrmDto {
  @ApiProperty({ default: 'asd' })
  text: string;

  @ApiProperty({ default: 'sss' })
  whoseText: string;
}
