import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BatchService {
  constructor(private prisma: PrismaService) {}

  //バッチ1実行したときに実行時間を記録
  upsertSchema01BatchExecutionTime() {
    return this.prisma.batchExecutionTime01.upsert({
      where: { id: 1 },
      update: { updateAt: new Date() },
      create: {},
    });
  }

  //バッチ2実行したときに実行時間を記録
  upsertSchema02BatchExecutionTime() {
    return this.prisma.batchExecutionTime01.upsert({
      where: { id: 1 },
      update: { updateAt: new Date() },
      create: {},
    });
  }
}
