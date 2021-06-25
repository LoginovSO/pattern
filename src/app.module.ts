import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimpleFactoryModule } from './modules/simple-factory/simple-factory.module';

@Module({
  imports: [SimpleFactoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
