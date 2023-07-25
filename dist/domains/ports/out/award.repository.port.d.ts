export interface CreateAwardDto {
    picture: string;
    name: string;
    description: string;
    year: number;
}
export interface AwardRepositoryPort {
    deleteAward(awardId: string): any;
    getOneById(id: string): any;
    getAll(): any;
    create(dto: CreateAwardDto): any;
}
