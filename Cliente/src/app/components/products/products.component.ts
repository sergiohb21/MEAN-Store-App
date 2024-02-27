import { Component, NgModule } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  categoryId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private productService: ProductService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    const categoryId = +this.route.snapshot.params['categoriaId'];
    
    if (categoryId) {
      this.products = await this.productService.getProductsCategory(categoryId);
    } else {
      this.products = await this.productService.getProducts();
    }
  }

  goBack(): void {
    this.router.navigate(['/inicio']);
  }
}