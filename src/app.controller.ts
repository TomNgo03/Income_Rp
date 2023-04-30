import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType, data } from './data';

@Controller('report/:type')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getAllIncomeReport(
    @Param('type') type: string
  ) {
    const rpType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((item) => item.type === rpType)
  }

  @Get(':id')
  getIncomeReportById(
    @Param('type') type: string,
    @Param('id') id: string
  ) {
    const rpType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((item) => item.type === rpType).find((item) => item.id === id)
  }

  @Post()
  createIncomeReport(
    @Body() body: {
      amount: number,
      sources: string
    }
  ) {
    return "Ok"
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
