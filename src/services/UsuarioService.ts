import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsuarioDTO } from "../features/usuarios/dto/UsuarioDTO";
import { catchError, Observable } from "rxjs";
import { InfoPersonalDTO } from "../features/usuarios/dto/InfoPersonaDTOresponse";
import { environment } from "../app/environment";
import { AuthUtils } from "../utils/auth/auth.utils";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient,
    private authUtils: AuthUtils
  ) {}

  actualizarUsuario(id: number, usuario: UsuarioDTO): Observable<void> {
    return this.http.patch<void>(
      `${this.apiUrl}/users/${id}`, 
      usuario,
      { headers: this.authUtils.getAuthHeaders() }
    ).pipe(
      catchError(this.authUtils.handleAuthError.bind(this.authUtils))
    );
  }

  // Obtener suma de sensores del usuario
  obtenerSumaSensores(usuarioId: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiUrl}/users/${usuarioId}/sensors/sum`,
      { headers: this.authUtils.getAuthHeaders() }
    ).pipe(
      catchError(this.authUtils.handleAuthError.bind(this.authUtils))
    );
  }

  // Obtener suma de alertas medias del usuario
  obtenerSumaAlertasMedias(usuarioId: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiUrl}/users/${usuarioId}/mediumAlerts/sum`,
      { headers: this.authUtils.getAuthHeaders() }
    ).pipe(
      catchError(this.authUtils.handleAuthError.bind(this.authUtils))
    );
  }

  // Obtener suma de alertas rojas del usuario
  obtenerSumaAlertasRojas(usuarioId: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiUrl}/users/${usuarioId}/redAlerts/sum`,
      { headers: this.authUtils.getAuthHeaders() }
    ).pipe(
      catchError(this.authUtils.handleAuthError.bind(this.authUtils))
    );
  }

  // Obtener suma de lecturas del usuario
  obtenerSumaLecturas(usuarioId: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiUrl}/users/${usuarioId}/lectures/sum`,
      { headers: this.authUtils.getAuthHeaders() }
    ).pipe(
      catchError(this.authUtils.handleAuthError.bind(this.authUtils))
    );
  }

  // Obtener información personal del usuario
  obtenerInfoPersonal(usuarioId: number): Observable<InfoPersonalDTO> {
    return this.http.get<InfoPersonalDTO>(
      `${this.apiUrl}/users/${usuarioId}/personalInfo`,
      { headers: this.authUtils.getAuthHeaders() }
    ).pipe(
      catchError(this.authUtils.handleAuthError.bind(this.authUtils))
    );
  }
}