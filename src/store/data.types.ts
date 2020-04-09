export interface IItem {
  id: number;
  producer_id: number;
  name: string;
  price: number;
  initial_quantity: number;
  available_quantity: number;
  location: number[];
  created: string;
}
