import { CardEntity } from '../entities/card.entity';
import { UpdateCardUseCase } from '../ports/in/update-card-use-case';
import { UpdateCardCommand } from '../ports/in/update-card.command';
import { CardRepositoryPort } from '../ports/out/card-repository.port';
export declare class UpdateCardService implements UpdateCardUseCase {
    private readonly _cardRepository;
    constructor(_cardRepository: CardRepositoryPort);
    UpdateCard(command: UpdateCardCommand): Promise<CardEntity>;
}
