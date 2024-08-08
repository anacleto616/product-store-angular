import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';
import { FormsComponent } from '../../shared/components/forms/forms.component';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductService } from '../../shared/services/products.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsComponent, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  productService = inject(ProductService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product) {
    this.productService.store(product).subscribe(() => {
      this.matSnackBar.open('Produto cadastrado com sucesso!', 'X');
    });

    this.router.navigateByUrl('/');
  }
}
