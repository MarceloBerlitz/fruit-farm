import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CropListResponse } from './integration/response/crop-list.response';
import { CropDetailsResponse } from './integration/response/crop-details.response';

@Injectable()
export class CropService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<CropListResponse[]> {
    return this.http.get<CropListResponse[]>(`${environment.baseUrl}/crops`);
  }

  public get(id: string): Observable<CropDetailsResponse> {
    return this.http.get<CropDetailsResponse>(`${environment.baseUrl}/crops/${id}`);
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

  public create(crop: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/crops`, crop);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/crops/${id}`);
  }

  public edit(id: string, crop: any): Observable<any> {
    return this.http.put<any>(`${environment.baseUrl}/crops/${id}`, crop);
  }

}
