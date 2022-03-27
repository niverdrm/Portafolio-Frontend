import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css'],
})
export class PinComponent implements OnInit {
  pin1: string = '';
  pin2: string = '';
  pin3: string = '';
  pin4: string = '';
  mensaje: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  cerrar() {
    this.authService.cerrarSesion();
  }

  async validarPin() {
    const clave = this.obtnerPin();
    const res = await this.authService.validarPin(clave);
    console.log(res);
    if (!res.ok) {
      console.log(res);
      return (this.mensaje = res.mensaje);
    } else {
      console.log('todo bien en pin');
      this.router.navigate(['/admin']);
    }
  }
  obtnerPin() {
    const clave = {
      clave: this.pin1 + this.pin2 + this.pin3 + this.pin4,
    };

    console.log(clave);
    return clave;
  }

  async onChange(e: number) {
    if (e) {
      await this.validarPin();
    }
  }
}
