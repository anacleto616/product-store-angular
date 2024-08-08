import { inject } from '@angular/core';
import { ProductService } from '../services/products.service';

export const getProducts = () => {
  const productService = inject(ProductService);
  return productService.index();
};
