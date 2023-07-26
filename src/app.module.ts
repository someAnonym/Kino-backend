import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { FilesModule } from './modules/files/files.module';
import { AuthModule } from './modules/auth/auth.module';
import { CardsModule } from './modules/card/cards.module';
import { AwardModule } from './modules/awards/awards.module';
import { PersonsModule } from './modules/persons/persons.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { CommentsModule } from './modules/comments/comments.module';
import { DirectorsModule } from './modules/directors/directors.module';
import { RatingsModule } from './modules/ratings/ratings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_HOST),
    UsersModule,
    FilesModule,
    AuthModule,
    CardsModule,
    AwardModule,
    PersonsModule,
    ReviewsModule,
    CommentsModule,
    DirectorsModule,
    RatingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
