import { ApiProperty } from '@nestjs/swagger';

export class DeleteAwardOrmDto {
  @ApiProperty({ default: '' })
  _id: string;
}
