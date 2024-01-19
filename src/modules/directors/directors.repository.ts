import { InjectModel } from '@nestjs/mongoose';
import {
  CreateDirectorDto,
  DirectorRepositoryPort,
} from 'src/domains/ports/out/director-repository.port';
import { Director, DirectorDocument } from './entities/director-orm.entity';
import { Model } from 'mongoose';
import { DirectorEntity } from 'src/domains/entities/director.entity';

export class DirectorsRepository implements DirectorRepositoryPort {
  constructor(
    @InjectModel(Director.name)
    private readonly repository: Model<DirectorDocument>,
  ) {}

  deleteDirector(directorId: string) {
    return this.repository.findByIdAndDelete(directorId);
  }

  createDirector(dto: CreateDirectorDto) {
    return this.repository.create(dto);
  }

  getAll() {
    return this.repository.find();
  }

  getDirecorById(directorId: string) {
    return this.repository.findById(directorId);
  }
}
