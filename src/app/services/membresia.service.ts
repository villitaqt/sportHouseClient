import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {
  private apiUrl = 'http://localhost:8080/api/membresias'; // Cambia la URL si es necesario

  constructor(private http: HttpClient) { }

  getAllMembresias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Otros métodos si es necesario
}

