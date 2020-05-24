import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { TreeListResponse } from './integration/response/tree-list.response';
import { TreeDetailsResponse } from './integration/response/tree-details.response';

@Injectable()
export class TreeService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<TreeListResponse[]> {
    return this.http.get<TreeListResponse[]>(`${environment.baseUrl}/trees`);
  }
  
  public getByGroup(id: string): Observable<TreeListResponse[]> {
    const params = new HttpParams().set('group', id);
    return this.http.get<TreeListResponse[]>(`${environment.baseUrl}/trees`, { params });
  }

  public getBySpecies(id: string): Observable<TreeListResponse[]> {
    const params = new HttpParams().set('species', id);
    return this.http.get<TreeListResponse[]>(`${environment.baseUrl}/trees`, { params });
  }

  public get(id: string): Observable<TreeDetailsResponse> {
    return this.http.get<TreeDetailsResponse>(`${environment.baseUrl}/trees/${id}`);
  }

  public create(tree: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/trees`, tree);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/trees/${id}`);
  }

  public edit(id: string, tree: any): Observable<any> {
    return this.http.put<any>(`${environment.baseUrl}/trees/${id}`, tree);
  }

}
