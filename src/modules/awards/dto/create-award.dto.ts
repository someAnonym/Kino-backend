import { ApiProperty } from '@nestjs/swagger';

export class CreateAwardOrmDto {
  @ApiProperty({ default: '/uploads/4023164377578765549544781137726429.png' })
  picture: string;

  @ApiProperty({ default: 'Оскар' })
  name: string;

  @ApiProperty({ default: 'Лучшая мужская роль ' })
  description: string;

  @ApiProperty({ default: 2020 })
  year: number;
}
