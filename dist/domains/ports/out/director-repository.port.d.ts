export interface CreateDirectorDto {
    name: string;
    secondName: string;
    picture: string;
}
export interface DirectorRepositoryPort {
    deleteDirector(directorId: string): any;
    getDirecorById(directorId: string): any;
    getAll(): any;
    createDirector(dto: CreateDirectorDto): any;
}
