export interface Product {
  id: number;
  name: string;
  price: number;
}

export const DummyProducts: Product[] = [
  {
    id: 1,
    name: 'Playstation',
    price: 500,
  },
  {
    id: 2,
    name: 'Fridge',
    price: 250,
  },
  {
    id: 3,
    name: 'Coffee Machine',
    price: 800,
  },
];
