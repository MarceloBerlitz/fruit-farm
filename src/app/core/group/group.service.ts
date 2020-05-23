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

  public getAll(tree?: string): Observable<GroupListResponse[]> {
    let params;
    if (tree) {
      params = new HttpParams()
      .set('tree', tree);
    }
    return this.http.get<GroupListResponse[]>(`${environment.baseUrl}/groups`, { params }); 
  }

  public get(id: string): Observable<GroupDetailsResponse> {
    return this.http.get<GroupDetailsResponse>(`${environment.baseUrl}/groups/${id}`)
  }

  public createGroup(request: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/groups`, request);
  }

  public deleteGroup(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/groups/${id}`);
  }


}
