import { HttpStatus } from '@nestjs/common';
import Lead from '../model/Lead';

export default interface AppResponseInterface {
  success: boolean;
  status: HttpStatus;
  message: string;
  leads?: Lead[];
}