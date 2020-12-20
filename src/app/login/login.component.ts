import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;
  rememberMe = false;
  logged_in = false;
  usersList;

  constructor(private fb:FormBuilder, public usersService: UsersService, private router: Router) {
      this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
      })
  }

  login() {
      this.usersService.getUsers().subscribe(users => {
          this.usersList = users;
          this.usersList.forEach(element => {
              if(element.email == this.loginForm.controls.email.value) {
                  if(element.password == this.loginForm.controls.password.value) {
                      this.router.navigate(['/catalogo'])
                  } else {
                    this.error = true;
                  }
              } else {
                this.error = true;
              }
          });
      })
  }

  ngOnInit(): void {
  }

}
