import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../pages/login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:5000/api';
  constructor(private http: HttpClient, private router: Router) {}

  Login(user: any) {
    return this.http.post<any>(this.url + '/login', user).toPromise();
  }

  loggedIn() {
    // if (localStorage.getItem('token')){
    //   return true
    // }
    //es igual a lo de  arriba
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  validarPin(pin: any) {
    console.log('En el servicio', pin);
    const res = this.http
      .post<any>(this.url + '/pin/loginPin', pin)
      .toPromise();
    console.log('estoy en el servicio', res);
    return res;
  }
}
