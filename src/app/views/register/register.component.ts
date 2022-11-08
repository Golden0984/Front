import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username: string = "";
  public contrasena: string = "";
  public contrasena2: string = "";
  public email: string = "";

  public formError: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  submitRegister(ngForm: NgForm) {
    console.log();
    if (ngForm.valid) {
      // registro
      console.log({
        username: this.username,
        contraseña: this.contrasena,
        contraseña2: this.contrasena2,
        email: this.email
      })
    } else {
      ngForm.control.markAllAsTouched()
    }
  }
}
