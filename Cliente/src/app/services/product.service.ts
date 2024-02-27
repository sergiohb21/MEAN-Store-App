import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:2525/productos/';
  private apiUrl1 = 'https://api.escuelajs.co/api/v1/products';


  constructor() { }

  async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const products: Product[] = await response.json();

      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProduct(id:number): Promise<Product> {
    try {
      const response = await fetch(this.apiUrl + id);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const product: Product = await response.json();
      
      return product;
    } catch (error) {
      throw error;
    }
  }

  async addProduct(product: Product): Promise<void> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    } catch (error) {
      throw error;
    }
  }

  async getProductsCategory(category: number): Promise<Product[]> {
    try {
      const response = await fetch(`http://localhost:2525/productos-categoria/${category}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const products: Product[] = await response.json();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId: number): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(product: Product): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }
  
}
