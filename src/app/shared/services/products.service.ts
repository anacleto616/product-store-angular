import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BodyProduct } from '../interfaces/body-product.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  httpClient = inject(HttpClient);

  index() {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
  }

  show(id: string) {
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  store(product: BodyProduct) {
    return this.httpClient.post<BodyProduct>(
      `${this.apiUrl}/products`,
      product
    );
  }

  update(id: string, product: BodyProduct) {
    // pode usar o put, porém neste cenário é mais adequado patch
    return this.httpClient.patch<BodyProduct>(
      `${this.apiUrl}/products/${id}`,
      product
    );
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/products/${id}`);
  }
}
