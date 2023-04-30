import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/income')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getAllIncomeReport() {
    return []
  }

}
