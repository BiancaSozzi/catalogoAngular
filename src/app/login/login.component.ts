import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login_logut_msg = "Iniciar Sesion";
  logged_in = false;

  constructor(private fb:FormBuilder) {
      this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
      })
  }

  login() {
      console.log(this.loginForm.value)
      if (this.logged_in) {
          this.logged_in = false;
          this.login_logut_msg = "Iniciar Sesion";
      } else {
          this.login_logut_msg = "Salir"
          this.logged_in = true;
      }
  }

  ngOnInit(): void {
  }

}
