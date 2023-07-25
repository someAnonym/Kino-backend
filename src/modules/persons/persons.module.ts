import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './entities/person-orm.entity';
import { PersonsController } from './persons.controller';
import { PersonsRepository } from './persons.repository';
import { UpdatePersonUseCaseSymbol } from 'src/domains/ports/in/update-person.use-case';
import { UpdatePersonService } from 'src/domains/services/update-person.service';
import { PersonsRepositoryPort } from 'src/domains/ports/out/person-repository.port';

@Module({
  imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])],
  controllers: [PersonsController],
  exports: [PersonsRepository],
  providers: [
    PersonsRepository,
    {
      provide: UpdatePersonUseCaseSymbol,
      useClass: UpdatePersonService,
    },

    {
      provide: UpdatePersonUseCaseSymbol,
      useFactory: (_personRepository: PersonsRepositoryPort) => {
        return new UpdatePersonService(_personRepository);
      },
      inject: [PersonsRepository],
    },
  ],
})
export class PersonsModule {}
