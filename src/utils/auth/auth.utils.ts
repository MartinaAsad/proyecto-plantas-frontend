import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class AuthUtils {
  constructor(private router: Router) {}

  // Maneja errores 401/403
  handleAuthError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401 || error.status === 403) {
      this.router.navigate(['/login']); 
    }
    return throwError(() => error);
  }

  // Genera headers con el token JWT
  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}