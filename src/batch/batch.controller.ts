import { Controller, Post } from '@nestjs/common';
import { BatchService } from './batch.service';

@Controller('batch')
export class BatchController {
  constructor(private readonly batchService: BatchService) {}

  @Post('/01')
  upsertSchema01BatchExecutionTime() {
    return this.batchService.upsertSchema01BatchExecutionTime();
  }

  @Post('/02')
  upsertSchema02BatchExecutionTime() {
    return this.batchService.upsertSchema02BatchExecutionTime();
  }
}
