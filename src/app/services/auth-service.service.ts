import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user;
  constructor() {}

  isLoggedIn(): boolean {
      this.getUser();
      return this.user != null;
  }

  getUser() {
      this.user = JSON.parse(sessionStorage.getItem('usuario'))
      if (this.user == null) {
        this.user = JSON.parse(localStorage.getItem('usuario'))
      }
      return this.user;
  }
}
