import { Product } from './product.interface';

export type BodyProduct = Omit<Product, 'id'>;
