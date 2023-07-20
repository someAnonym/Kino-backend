import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user-orm.entity';
import { UpdateUserUseCaseSymbol } from 'src/domains/ports/in/update-user.use-case';
import { UpdateUserService } from 'src/domains/services/update-user.service';
import { UpdateUserPasswordUseCaseSymbol } from 'src/domains/ports/in/update-user-password.use-case';
import { UpdateUserPasswordService } from 'src/domains/services/update-user-password.service';
import { UserRepositoryPort } from 'src/domains/ports/out/user-repository.port';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  exports: [UsersRepository],
  providers: [
    UsersRepository,
    {
      provide: UpdateUserUseCaseSymbol,
      useClass: UpdateUserService,
    },
    {
      provide: UpdateUserPasswordUseCaseSymbol,
      useClass: UpdateUserPasswordService,
    },
    {
      provide: UpdateUserUseCaseSymbol,
      useFactory: (_userRepository: UserRepositoryPort) => {
        return new UpdateUserService(_userRepository);
      },
      inject: [UsersRepository],
    },
    {
      provide: UpdateUserPasswordUseCaseSymbol,
      useFactory: (_userRepository: UserRepositoryPort) => {
        return new UpdateUserPasswordService(_userRepository);
      },
      inject: [UsersRepository],
    },
  ],
})
export class UsersModule {}
