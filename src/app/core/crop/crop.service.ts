import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CropListResponse } from './integration/response/crop-list.response';

@Injectable()
export class CropService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(group?: string): Observable<CropListResponse[]> {
    let params;
    if (group) {
      params = new HttpParams().set('group', group);
    }
    return this.http.get<CropListResponse[]>(`${environment.baseUrl}/crops`, { params })
  }
  
}
