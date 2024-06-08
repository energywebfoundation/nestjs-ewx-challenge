import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

export type Vote = {
  accountId: number;
  value: number;
};

@Controller()
export class AppController {
  CONSENSUS_THRESHOLD = 3;

  constructor(private readonly appService: AppService) {}
}
