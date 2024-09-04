import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoMembresiaService {
  private apiUrl = 'http://localhost:8080/api/tipos-membresia';  // URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener todos los tipos de membresía
  getTiposMembresia(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTipoMembresia(tipoMembresia: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, tipoMembresia);
  }

  deleteTipoMembresia(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Puedes agregar más métodos aquí si necesitas, como crear, actualizar, eliminar tipos de membresía, etc.
}
