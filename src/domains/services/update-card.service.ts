import { CardEntity } from '../entities/card.entity';
import { UpdateCardUseCase } from '../ports/in/update-card-use-case';
import { UpdateCardCommand } from '../ports/in/update-card.command';
import { CardRepositoryPort } from '../ports/out/card-repository.port';

export class UpdateCardService implements UpdateCardUseCase {
  constructor(private readonly _cardRepository: CardRepositoryPort) {}

  async UpdateCard(command: UpdateCardCommand): Promise<CardEntity> {
    const card = await this._cardRepository.loadCard(command.cardId);
    card.updateDislikes(command.dislikes);
    card.updateFavorite(command.favorites);
    card.updateLikes(command.likes);
    card.updateReviews(command.reviews);

    await this._cardRepository.updateCard(card);
    return card;
  }
}
