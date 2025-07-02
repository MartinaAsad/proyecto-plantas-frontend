import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginacionResponse } from "../features/paginacion/response/PaginacionResponse";
import { PlantaDTO } from "../features/plantas/dto/PlantaDTO";
import { PlantaEdicionDTO } from "../features/plantas/dto/PlantaEdicionDTO";
import { PlantaDTOResponse } from "../features/plantas/dto/PlantaDTOResponse";
import { environment } from "../app/environment";

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  // Crear planta
  crearPlanta(planta: PlantaDTO): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/plants`, planta);
  }

  // Editar planta
  editarPlanta(id: number, planta: PlantaEdicionDTO): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/plants/${id}`, planta);
  }

  // Obtener plantas paginadas por usuario
  obtenerPlantas(id: number, page: number = 0, size: number = 10): Observable<PaginacionResponse<PlantaDTOResponse>> {
    return this.http.get<PaginacionResponse<PlantaDTOResponse>>(
      `${this.apiUrl}/plants/${id}?page=${page}&size=${size}`
    );
  }

  // Obtener número de sensores de una planta
  obtenerSensores(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/plants/${id}/sensors`);
  }

  // Obtener alertas medias de una planta
  obtenerAlertasMedias(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/plants/${id}/mediumAlerts`);
  }

  // Obtener alertas rojas de una planta
  obtenerAlertasRojas(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/plants/${id}/redAlerts`);
  }

  // Obtener lecturas de una planta
  obtenerLecturas(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/plants/${id}/lectures`);
  }

  // Eliminar planta
  borrarPlanta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/plants/${id}`);
  }
}