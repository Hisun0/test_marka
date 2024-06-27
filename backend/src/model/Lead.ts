import LeadTrueInterface from '../interface/leadTrue-interface';

export default class Lead implements LeadTrueInterface{
  constructor(
    createdAt: Date,
    manager: string,
    name: string,
    pipeline: string,
    price: number
  ) {
    this.createdAt = createdAt;
    this.manager = manager;
    this.name = name;
    this.pipeline = pipeline;
    this.price = price;
  }

  createdAt: Date;
  manager: string;
  name: string;
  pipeline: string;
  price: number;
}
