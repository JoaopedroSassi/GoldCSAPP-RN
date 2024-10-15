import { Address } from './Address';
import { Client } from './Client';
import { OrderProduct } from './OrderProduct';

export interface Order {
  orderID: number;
  orderDate: string; 
  paymentMethod: string;
  total: number;
  deliveryForecast: string; 
  userName: string;
  address: Address;
  client: Client;
  orderProducts: OrderProduct[];
}