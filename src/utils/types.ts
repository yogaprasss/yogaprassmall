export interface ProductProps {
  id: number;
  title: string;
  description: string;
  main_price: number;
  special_price?: number;
  images: string[];
}