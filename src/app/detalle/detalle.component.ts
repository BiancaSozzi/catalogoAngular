import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { AuthServiceService } from '../services/auth-service.service'
import { LogoutComponent } from '../logout/logout.component'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  product;
  isLoggedIn = false;
  constructor(public route: ActivatedRoute, public productsService: ProductsService, public authService: AuthServiceService) { }

  ngOnInit(): void {
      this.route.params
      .subscribe(params => {
          const _id = params['id'].toString();
          this.getProductById(_id);
      })
      this.isLoggedIn = this.authService.isLoggedIn();
  }

  getProductById(id) {
      this.productsService.getProductById(id).subscribe(
        prod => {
          this.product = prod;
      })
  }
}
