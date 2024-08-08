import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-no-products',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './no-products.component.html',
  styleUrl: './no-products.component.scss',
})
export class NoProductsComponent {}
