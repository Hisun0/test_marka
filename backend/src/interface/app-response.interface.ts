import { HttpStatus } from '@nestjs/common';
import LeadInterface from './lead.interface';

export default interface AppResponseInterface {
  success: boolean;
  status: HttpStatus;
  message: string;
  leads?: LeadInterface[];
}