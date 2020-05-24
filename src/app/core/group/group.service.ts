import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

import { GroupListResponse } from './integration/response/group-list.response';
import { GroupDetailsResponse } from './integration/response/group-details.response';

@Injectable()
export class GroupService {
  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<GroupListResponse[]> {
    return this.http.get<GroupListResponse[]>(`${environment.baseUrl}/groups`); 
  }

  public getByTree(id: string): Observable<GroupListResponse[]> {
    const params = new HttpParams().set('tree', id);
    return this.http.get<GroupListResponse[]>(`${environment.baseUrl}/groups`, { params }); 
  }


  public get(id: string): Observable<GroupDetailsResponse> {
    return this.http.get<GroupDetailsResponse>(`${environment.baseUrl}/groups/${id}`)
  }

  public create(request: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/groups`, request);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/groups/${id}`);
  }

  public edit(id: string, group: any): Observable<any> {
    return this.http.put<any>(`${environment.baseUrl}/groups/${id}`, group);
  }

}
