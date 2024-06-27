import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import amoRoutes from './routes/amoRoutes';
import { catchError, firstValueFrom, of } from 'rxjs';
import { AxiosError } from 'axios';
import AmoLeadResponseInterface from './interface/amoLead-response.interface';
import AppResponseInterface from './interface/app-response.interface';
import LeadFullInterface from './interface/lead-full.interface';
import LeadInterface from './interface/lead.interface';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getLeads(query: string): Promise<AppResponseInterface> {
    try {
      const data = await this.fetchData<AmoLeadResponseInterface>(amoRoutes.getLeads(), {query});
      const leads = await this.formatLeads(data._embedded.leads);

      return {
        success: true,
        status: HttpStatus.OK,
        message: 'Success!',
        leads,
      };
    } catch (error) {
      return error as AppResponseInterface;
    }
  }

  formatLeads(leads: LeadFullInterface[]): Promise<Awaited<LeadInterface>[]> {
    return Promise.all(leads.map(async (lead) => {
      try {
        const pipelineName = await this.getPipelineStatus(lead.pipeline_id, lead.status_id);
        const managerName = await this.getManagerName(lead.responsible_user_id);

        return {
          createdAt: new Date(lead.created_at),
          manager: managerName,
          name: lead.name,
          pipeline: pipelineName,
          price: lead.price
        }
      } catch (error) {
        throw error;
      }
    }));
  }

  async getPipelineStatus(pipelineId: number, statusId: number): Promise<string> {
    return await this.fetchData(amoRoutes.getPipelineStatus(pipelineId, statusId));
  }

  async getManagerName(id: number): Promise<string> {
    const data = await this.fetchData<{ name: string }>(amoRoutes.getManager(id));
    return data.name;
  }

  private handleErrorResponse(err: AxiosError): AppResponseInterface {
    return {
      success: false,
      status: err.response?.status || 500,
      message: err.message,
    };
  }

  private async fetchData<T>(url: string, params?: any): Promise<T> {
    const response = this.httpService.get<T>(url, {
      headers: {
        Authorization: `Bearer ${ this.configService.get<string>('accessToken') }`,
      },
      params,
    });

    const result = await firstValueFrom(response.pipe(
      catchError((err: AxiosError) => of(this.handleErrorResponse(err)))
    ));

    if ('success' in result) {
      throw result;
    }

    return result.data;
  }
}
