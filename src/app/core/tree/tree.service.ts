import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { TreeListResponse } from './integration/response/tree-list.response';

@Injectable()
export class TreeService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<TreeListResponse[]> {
    return this.http.get<TreeListResponse[]>(`${environment.baseUrl}/trees`)
  }

}
