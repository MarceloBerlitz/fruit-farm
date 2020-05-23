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

  public getAll(group?: string, tree?: string): Observable<CropListResponse[]> {
    let params;
    if (group || tree) {
      params = new HttpParams()
      .set('group', group)
      .set('tree', tree);
    }
    return this.http.get<CropListResponse[]>(`${environment.baseUrl}/crops`, { params })
  }
  
}
