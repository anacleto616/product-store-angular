import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../services/products.service';

export const getProduct = (route: ActivatedRouteSnapshot) => {
  const productsService = inject(ProductService);
  return productsService.show(route.paramMap.get('id') as string);
};
