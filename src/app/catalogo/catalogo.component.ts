import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthServiceService } from '../services/auth-service.service'
import { LogoutComponent } from '../logout/logout.component'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productsList;
  isLoggedIn = false;
  user;
  constructor(public productsService: ProductsService, public authService: AuthServiceService) { }

  getAllProducts() {
      this.productsService.getAllProducts().subscribe(
        products => {
          this.productsList = products;
      })
 }

  ngOnInit(): void {
      this.getAllProducts();
      this.isLoggedIn = this.authService.isLoggedIn();
      if (this.isLoggedIn) {
          this.user = this.authService.getUser();
      }
  }

}
