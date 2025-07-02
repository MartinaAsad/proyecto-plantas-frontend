import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

import { Router } from '@angular/router';
import { environment } from '../app/environment';
import { UsuarioDTO } from '../features/usuarios/dto/UsuarioDTO';
import { UsuarioLoginDTO } from '../features/usuarios/dto/UsuarioLoginDTO';
import { AuthDTO } from '../features/auth/AuthDTO';
import { AuthUtils } from '../utils/auth/auth.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authUtils: AuthUtils
  ) {}

  crearUsuario(usuario: UsuarioDTO): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/users`, usuario)
      .pipe(
        catchError(this.authUtils.handleAuthError)
      );
  }

  login(credentials: UsuarioLoginDTO): Observable<AuthDTO> {
    return this.http.post<AuthDTO>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        // Guardar token en localStorage
        localStorage.setItem('token', response.token);
        this.router.navigate(['/panel']);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  register(user: UsuarioDTO): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, user);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}