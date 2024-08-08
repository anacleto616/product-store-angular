import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductService } from '../../shared/services/products.service';
import { ConfirmationDialogService } from './../../shared/services/confirmation-dialog.service';
import { CardComponent } from './components/card/card.component';
import { NoProductsComponent } from './components/no-products/no-products.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterLink,
    MatButtonModule,
    NoProductsComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  // products: Product[] = [];
  products = signal<Product[]>(
    inject(ActivatedRoute).snapshot.data['products']
  );

  productService = inject(ProductService);
  router = inject(Router);
  matDialog = inject(MatDialog);
  confirmationDialogService = inject(ConfirmationDialogService);

  // ngOnInit() {
  //   this.loadProducts();
  // }

  loadProducts() {
    this.productService.index().subscribe((products) => {
      this.products.set(products);
    });
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialogService
      .openDialog()
      .pipe(filter((answer) => answer))
      .subscribe(() => {
        this.productService
          .delete(product.id)
          .subscribe(() => this.loadProducts());
      });
  }
}
