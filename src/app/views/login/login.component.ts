import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  formLogin: FormGroup;

  constructor(private formGroup: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formGroup.group({
      usuario:['',[
        Validators.required
      ]],
      contrasena:['',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ]]
    });
  }

  send(){
    console.log(this.formLogin.get("contrasena")?.hasError('required'));
    console.log(this.formLogin.get("contrasena")?.errors);
  }


}
