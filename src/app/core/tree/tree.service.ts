import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { TreeListResponse } from './integration/response/tree-list.response';

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

}