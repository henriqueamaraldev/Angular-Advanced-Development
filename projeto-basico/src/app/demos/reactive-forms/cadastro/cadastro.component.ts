import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      document: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      passwordConfirmation: [''],
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


}
