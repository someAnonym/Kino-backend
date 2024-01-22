import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'a@a.a' })
  email: string;

  @ApiProperty({ default: 'Dima' })
  name: string;

  @ApiProperty({ default: 'Foki' })
  secondName: string;

  @ApiProperty({ default: '123123321' })
  password: string;
}
