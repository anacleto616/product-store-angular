import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';
import { FormsComponent } from '../../shared/components/forms/forms.component';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductService } from '../../shared/services/products.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsComponent, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  productService = inject(ProductService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productService.update(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Produto atualizado com sucesso!', 'X');
    });

    this.router.navigateByUrl('/');
  }
}
