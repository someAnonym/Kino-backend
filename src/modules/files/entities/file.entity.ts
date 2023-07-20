import { Prop, Schema } from '@nestjs/mongoose';
import { UserEntity } from 'src/domains/entities/user.entity';

export enum FileType {
  PHOTOS = 'photos',
  TRASH = 'trash',
}

@Schema()
export class File {
  @Prop()
  id: number;
  @Prop()
  filename: string;

  @Prop()
  originalName: string;

  @Prop()
  size: number;

  @Prop()
  mimetype: string;

  @Prop()
  user: UserEntity;

  @Prop()
  deletedAt?: Date;
}
