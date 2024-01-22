export interface CreateRatingDto {
  rate: string;
  whoose: string;
}

export interface RatingRepositoryPort {
  createRating(dto: CreateRatingDto);
  deleteRating(id: string);
  getRatingById(id: string);
  getAll();
}
