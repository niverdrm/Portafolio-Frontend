import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  formContacto: FormGroup;

  createFormContacto(): FormGroup {
    return new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required),
    });
  }

  constructor() {
    this.formContacto = this.createFormContacto();
  }

  ngOnInit(): void {}

  enviar() {
    console.log('hola mundo');
  }

  get nombres() {
    return this.formContacto.get('nombres');
  }
  get apellidos() {
    return this.formContacto.get('apellidos');
  }

  get correo() {
    return this.formContacto.get('correo');
  }

  get celular() {
    return this.formContacto.get('celular');
  }
  get mensaje() {
    return this.formContacto.get('mensaje');
  }
}
