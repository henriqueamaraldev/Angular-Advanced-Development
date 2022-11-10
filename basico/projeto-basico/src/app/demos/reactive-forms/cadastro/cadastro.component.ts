import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  constructor() { }

  ngOnInit() {

    this.cadastroForm = new FormGroup({
      name: new FormControl(''),
      document: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      retypePassword: new FormControl(''),
    })
  }

  addUser() {
    let x = this.cadastroForm.value;
    console.log(x)
  }


}
