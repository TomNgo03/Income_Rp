import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getAllIncomeReport() {
    return []
  }

  @Get(':id')
  getIncomeReportById() {
    return {}
  }

  @Post()
  postIncomeReport() {
    return "Ok"
  }

  @Post(':id')
  postIncomeReportById() {
    return "DOne1"
  }

  @Put(':id')
  updateIncomeReportById() {
    return "DOne2"
  }

  @Delete(':id')
  deleteIncomeReportById() {
    return "DOne3"
  }
}
