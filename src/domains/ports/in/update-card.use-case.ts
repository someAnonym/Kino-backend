import { UpdateCardCommand } from './update-card.command';
import { CardEntity } from 'src/domains/entities/card.entity';

export const UpdateCardUseCaseSymbol = Symbol('UpdateCardUseCase');

export interface UpdateCardUseCase {
  UpdateCard(command: UpdateCardCommand): Promise<CardEntity>;
}
