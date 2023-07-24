import { UpdateCardCommand } from './update-card.command';
import { CardEntity } from 'src/domains/entities/card.entity';
export declare const UpdateCardUseCaseSymbol: unique symbol;
export interface UpdateCardUseCase {
    UpdateCard(command: UpdateCardCommand): Promise<CardEntity>;
}
