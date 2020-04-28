export interface IItem {
  id: number;
  producer_id: number;
  producer_name: string;
  consumer_name: string;
  food_name: string;
  price: number;
  initial_quantity: number;
  available_quantity: number;
  quantity?: number;
  description?: number;
  location: number[];
  created: string;
  complete?: string;
}
