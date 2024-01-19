import { ObjectId } from 'mongodb';
import { Card } from './entities/card-orm.entity';
import { CardEntity } from 'src/domains/entities/card.entity';
type CardData = {
    _id: ObjectId;
} & Card;
export declare class CardMapper {
    static mapToDomain(card: CardData): CardEntity;
}
export {};
