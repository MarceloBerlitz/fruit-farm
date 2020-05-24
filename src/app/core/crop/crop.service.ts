import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CropListResponse } from './integration/response/crop-list.response';

@Injectable()
export class CropService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<CropListResponse[]> {
    return this.http.get<CropListResponse[]>(`${environment.baseUrl}/crops`);
  }

  public getByGroup(id: string): Observable<CropListResponse[]> {
      const params = new HttpParams().set('group', id);
    return this.http.get<CropListResponse[]>(`${environment.baseUrl}/crops`, { params });
  }

  public getByTree(id: string): Observable<CropListResponse[]> {
    const params = new HttpParams().set('tree', id);
  return this.http.get<CropListResponse[]>(`${environment.baseUrl}/crops`, { params });
  }

  public getBySpecies(id: string): Observable<CropListResponse[]> {
    const params = new HttpParams().set('species', id);
    return this.http.get<CropListResponse[]>(`${environment.baseUrl}/crops`, { params });
  }

}
