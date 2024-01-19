export interface CreateRatingDto {
    rate: string;
    whoose: string;
}
export interface RatingRepositoryPort {
    createRating(dto: CreateRatingDto): any;
    deleteRating(id: string): any;
    getRatingById(id: string): any;
    getAll(): any;
}
