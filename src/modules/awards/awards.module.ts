import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AwardsController } from './awards.controller';
import { AwardsRepository } from './awards.repository';
import { Award, AwardSchema } from './entities/award.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Award.name, schema: AwardSchema }])],
  controllers: [AwardsController],
  exports: [AwardsRepository],
  providers: [AwardsRepository],
})
export class AwardModule {}
