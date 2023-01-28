import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BatchModule } from './batch/batch.module';

@Module({
  imports: [PrismaModule, BatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
