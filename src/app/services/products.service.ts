import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
      return this.http.get('https://my-json-server.typicode.com/BiancaSozzi/catalogoAngular/products');
  }

  getProductById(productId) {
      return this.http.get('https://my-json-server.typicode.com/BiancaSozzi/catalogoAngular/products/' + productId);
  }

}
