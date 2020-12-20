import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(userId) {
      return this.http.get('https://my-json-server.typicode.com/BiancaSozzi/catalogoAngular/users' );
  }
}
