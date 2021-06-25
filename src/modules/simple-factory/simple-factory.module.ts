import { Module } from '@nestjs/common';
import { SimpleFactoryController } from './simple-factory.controller';

@Module({
  controllers: [SimpleFactoryController],
})
export class SimpleFactoryModule {}
