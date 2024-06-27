import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { AppService } from './app.service';
import AppResponseInterface from './interface/app-response.interface';

@Controller('/leads')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getLeads(@Query('query') query: string): Promise<AppResponseInterface> {
    const result = await this.appService.getLeads(query);

    if (!result.success) {
      throw new HttpException(result.message, result.status);
    }

    return result;
  }
}
