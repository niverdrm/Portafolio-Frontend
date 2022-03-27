import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  subscription: Subscription = new Subscription();
  mensaje: String = '';

  createFormlogin(): FormGroup {
    return new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  constructor(private router: Router, private autService: AuthService) {
    this.formLogin = this.createFormlogin();
  }
  ngOnInit(): void {}

  async entrar() {
    const formulario = this.formLogin.value;
    const res = await this.autService.Login(formulario);
    if (!res.ok) {
      this.router.navigate(['/auth']);
      this.mensaje = 'Algunos de los datos no coinciden';
      return;
    }
    console.log(' todo bien');
    localStorage.setItem('token', res.token);
    this.router.navigate(['/auth/pin']);
  }

  get correo() {
    return this.formLogin.get('correo');
  }

  get clave() {
    return this.formLogin.get('clave');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
