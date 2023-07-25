import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './entities/card-orm.entity';
import { CardsController } from './cards.controller';
import { CardsRepository } from './cards.repository';
import { UpdateCardService } from 'src/domains/services/update-card.service';
import { CardRepositoryPort } from 'src/domains/ports/out/card-repository.port';
import { UpdateCardUseCaseSymbol } from 'src/domains/ports/in/update-card.use-case';

@Module({
  imports: [MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }])],
  controllers: [CardsController],
  exports: [CardsRepository],
  providers: [
    CardsRepository,
    {
      provide: UpdateCardUseCaseSymbol,
      useClass: UpdateCardService,
    },

    {
      provide: UpdateCardUseCaseSymbol,
      useFactory: (_cardRepository: CardRepositoryPort) => {
        return new UpdateCardService(_cardRepository);
      },
      inject: [CardsRepository],
    },
  ],
})
export class CardsModule {}
