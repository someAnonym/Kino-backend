import { DirectorEntity } from 'src/domains/entities/director.entity';

export interface CreateDirectorDto {
  name: string;
  secondName: string;
  picture: string;
}

export interface DirectorRepositoryPort {
  deleteDirector(directorId: string);
  getDirecorById(directorId: string);
  getAll();
  createDirector(dto: CreateDirectorDto);
}
