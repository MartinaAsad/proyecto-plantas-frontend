import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UsuarioLoginDTO } from '../features/usuarios/dto/UsuarioLoginDTO';
import { UsuarioDTO } from '../features/usuarios/dto/UsuarioDTO';
import { AuthDTO } from '../features/auth/AuthDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) {}

  login(credentials: UsuarioLoginDTO): Observable<AuthDTO> {
    return this.http.post<AuthDTO>(`${this.apiUrl}/login`, credentials)
      .pipe(
        catchError(this.handleLoginError)
      );
  }

  crearUsuario(usuario: UsuarioDTO): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/users`, usuario)
      .pipe(
        catchError(this.handleUsuarioError)
      );
  }

  // Manejo específico de errores de login
  private handleLoginError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error de autenticación';
    
    if (error.status === 401) {
      errorMessage = 'Usuario o clave incorrectos';
    } else if (error.status === 500) {
      errorMessage = 'Error interno del servidor';
    }
    
    return throwError(() => new Error(errorMessage));
  }

  // Manejo específico de errores de creación de usuario
  private handleUsuarioError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error al crear usuario';
    
    if (error.status === 400) {
      // Aquí puedes parsear el mensaje específico del backend
      errorMessage = error.error?.message || 'Datos de usuario inválidos';
    }
    
    return throwError(() => new Error(errorMessage));
  }

  // Métodos auxiliares para manejo de token
  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  removeToken(): void {
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    this.removeToken();
  }
}