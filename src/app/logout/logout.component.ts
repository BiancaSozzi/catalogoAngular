import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user;
  constructor(private router: Router) { }

  ngOnInit(): void {
      this.user = JSON.parse(sessionStorage.getItem('usuario'))
      if (this.user == null) {
        this.user = JSON.parse(localStorage.getItem('usuario'))
      }
  }

  logout() {
      this.router.navigate([''])
  }

}
