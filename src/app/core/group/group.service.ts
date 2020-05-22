import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  public get(id: string): Observable<GroupDetailsResponse> {
    return this.http.get<GroupDetailsResponse>(`${environment.baseUrl}/groups/${id}`)
  }

  public createGroup(request: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/groups`, request);
  }


}
