import { Module } from '@nestjs/common';
import { DirectorsController } from './directors.controller';
import { DirectorsRepository } from './directors.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Director, DirectorSchema } from './entities/director-orm.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Director.name, schema: DirectorSchema }])],
  controllers: [DirectorsController],
  providers: [DirectorsRepository],
})
export class DirectorsModule {}
