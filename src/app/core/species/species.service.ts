import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class SpeciesService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/species`);
  }

  public get(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/species/${id}`);
  }

  public create(species: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/species`, species);
  }

}
