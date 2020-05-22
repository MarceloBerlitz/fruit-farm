import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

import { GroupListResponse } from './integration/response/group-list.response';

@Injectable()
export class GroupService {
  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<GroupListResponse[]> {
    return this.http.get<GroupListResponse[]>(`${environment.baseUrl}/groups`); 
  }

  public createGroup(request: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/groups`, request);
  }


}
