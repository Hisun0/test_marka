import Lead from './lead-full.interface';

export default interface AmoLeadResponseInterface {
  id: number;
  name: string;
  price: number;
  responsible_user_id: number;
  group_id: number;
  status_id: number;
  pipeline_id: number;
  loss_reason_id:	number;
  source_id: number;
  created_by:	number;
  updated_by: number;
  closed_at: number;
  created_at: number;
  updated_at:	number;
  closest_task_at:	number;
  is_deleted:	boolean;
  custom_fields_values:	[] | null;
  score: number | null;
  account_id:	number;
  labor_cost:	number;
  is_price_modified_by_robot:	boolean;
  _embedded: {
    leads: Lead[],
  };
  '_embedded[loss_reason]':	object;
  '_embedded[loss_reason][id]'	:number;
  '_embedded[loss_reason][name]'	:string;
  '_embedded[tags]':	[];
  '_embedded[tags][0]'	:object;
  '_embedded[tags][0][id]'	:number;
  '_embedded[tags][0][name]'	:string;
  '_embedded[tags][0][color]':	string | null;
  '_embedded[contacts]':	[];
  '_embedded[contacts][0]'	:object;
  '_embedded[contacts][0][id]': number;
  '_embedded[contacts][0][is_main]:': boolean;
  '_embedded[companies]':	[];
  '_embedded[companies][0]'	:object;
  '_embedded[companies][0][id]'	:number;
  '_embedded[catalog_elements]':	[];
  '_embedded[catalog_elements][0]'	:object;
  '_embedded[catalog_elements][0][id]'	:number;
  '_embedded[catalog_elements][0][metadata]': object;
  '_embedded[catalog_elements][0][quantity]': number;
  '_embedded[catalog_elements][0][catalog_id]': number;
  '_embedded[catalog_elements][0][price_id]': number;
}
