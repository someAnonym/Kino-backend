import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'test@test.test' })
  email: string;

  @ApiProperty({ default: 'Vasya' })
  name: string;

  @ApiProperty({ default: 'Pupkin' })
  secondName: string;

  @ApiProperty({ default: '123123321' })
  password: string;
}
