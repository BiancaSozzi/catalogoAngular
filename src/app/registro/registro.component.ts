import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  constructor(private fb:FormBuilder) {
      this.registroForm=this.fb.group({
          nombre: ['',[Validators.required]],
          apellido: ['',[Validators.required]],
          telefono: ['', Validators.pattern("[0-9]*")],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  register() {
      console.log(this.registroForm.value)
  }

  ngOnInit(): void {
  }

}
