import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
    product;
  constructor(public route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit(): void {
      this.route.params
      .subscribe(params => {
          const _id = params['id'].toString();
          this.getProductById(_id);
      })
  }

  getProductById(id) {
      this.productsService.getProductById(id).subscribe(
        prod => {
          this.product = prod;
      })
  }
}
