import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MiembroService {
  
  private apiUrl = 'http://localhost:8080/api/miembros';

  constructor(private http: HttpClient) { }

  getMiembros(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getMiembroById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createMiembro(miembro: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, miembro);
  }

  updateMiembro(id: number, miembro: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, miembro);
  }

  deleteMiembro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
