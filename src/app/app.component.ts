import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catalogo';
  constructor(authService: AuthServiceService, router: Router) {
    if (authService.isLoggedIn()) {
      router.navigate(['catalogo']);
    }
  }
}
