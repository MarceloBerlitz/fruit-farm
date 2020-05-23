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

  public getAll(group?: string): Observable<TreeListResponse[]> {
    let params;
    if (group) {
      params = new HttpParams().set('group', group);
    }
    return this.http.get<TreeListResponse[]>(`${environment.baseUrl}/trees`, { params })
  }

  public get(id: string): Observable<TreeDetailsResponse> {
    return this.http.get<TreeDetailsResponse>(`${environment.baseUrl}/trees/${id}`);
  }

}
