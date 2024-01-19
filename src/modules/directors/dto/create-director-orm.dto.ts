import { ApiProperty } from '@nestjs/swagger';

export class CreateDirectorOrmDto {
  @ApiProperty({ default: '' })
  name: string;

  @ApiProperty({ default: '' })
  secondName: string;

  @ApiProperty({ default: '' })
  picture: string;
}
