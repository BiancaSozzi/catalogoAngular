import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productsList;
  constructor(public productsService: ProductsService) { }

  getAllProducts() {
      this.productsService.getAllProducts().subscribe(
        products => {
          this.productsList = products;
      })
 } 

  ngOnInit(): void {
      this.getAllProducts();
  }

}
