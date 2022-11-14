import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { User } from './models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  signUpForm: FormGroup;
  user: User;
  formResult: string = ''

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      document: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]],
    })
  }

  addUser() {
    if (this.signUpForm.valid) {
      this.user = Object.assign({}, this.user, this.signUpForm.value);
      this.formResult = JSON.stringify(this.signUpForm.value)
      console.log(this.user)
    }
    else {
      this.formResult = "Formulário invalido!"
    }

  }

  invalidFormField(field: string): boolean {
    return this.signUpForm.get(field).errors && (this.signUpForm.get(field).dirty || this.signUpForm.get(field).touched)
  }

}
