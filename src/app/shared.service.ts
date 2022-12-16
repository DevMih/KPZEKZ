import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'https://localhost:44330/api';

  constructor(private http: HttpClient) { }

  getClothingList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Clothing');
  }

  getClothing(id: any): any {
    return this.http.get<any>(this.APIUrl + '/Clothing/' + id);
  }

  addClothing(val: any) {
    return this.http.post(this.APIUrl + '/Clothing', val)
  }

  putClothing(id: any, val: any) {
    return this.http.put(this.APIUrl + '/Clothing/' + id, val)
  }

  deleteClothing(val: any) {
    return this.http.delete(this.APIUrl + '/Clothing/' + val)
  }
}
