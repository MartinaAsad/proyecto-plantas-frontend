import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthUtils } from '../../../../utils/auth/auth.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authUtils: AuthUtils) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => this.authUtils.handleAuthError(error))
    );
  }
}