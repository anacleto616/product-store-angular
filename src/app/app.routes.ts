import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { getProduct } from './shared/resolvers/get-product.resolver';
import { getProducts } from './shared/resolvers/get-products.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: getProducts,
    },
    component: ListComponent,
  },
  {
    path: 'create-product',
    // forma básica, sem lazy loading na rota
    // component: CreateComponent,

    // forma com lazy loading, mais performance para apps robustas
    loadComponent: () =>
      import('./features/create/create.component').then(
        (module) => module.CreateComponent
      ),
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: getProduct,
    },
    // forma básica, sem lazy loading na rota
    // component: EditComponent,

    // forma com lazy loading, mais performance para apps robustas
    loadComponent: () =>
      import('./features/edit/edit.component').then(
        (module) => module.EditComponent
      ),
  },
];
