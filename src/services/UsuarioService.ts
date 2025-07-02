import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsuarioDTO } from "../features/usuarios/dto/UsuarioDTO";
import { Observable } from "rxjs";
import { InfoPersonalDTO } from "../features/usuarios/dto/InfoPersonaDTOresponse";
import { environment } from "../app/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  // Actualizar usuario
  actualizarUsuario(id: number, usuario: UsuarioDTO): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/users/${id}`, usuario);
  }

  // Obtener suma de sensores del usuario
  obtenerSumaSensores(usuarioId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/users/${usuarioId}/sensors/sum`);
  }

  // Obtener suma de alertas medias del usuario
  obtenerSumaAlertasMedias(usuarioId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/users/${usuarioId}/mediumAlerts/sum`);
  }


  obtenerSumaAlertasRojas(usuarioId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/users/${usuarioId}/redAlerts/sum`);
  }

  obtenerSumaLecturas(usuarioId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/users/${usuarioId}/lectures/sum`);
  }
  obtenerInfoPersonal(usuarioId: number): Observable<InfoPersonalDTO> {
    return this.http.get<InfoPersonalDTO>(`${this.apiUrl}/users/${usuarioId}/personalInfo`);
  }
}