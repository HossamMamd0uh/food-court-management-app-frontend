import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3255/api/v1/stores/';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}get-all-stores`);
  }

  create(store): Observable<any> {

    return this.http.post(`${baseUrl}create-new-store`, {store});
  }

  get(_id): Observable<any> {
    return this.http.get(`${baseUrl}get-single-store/${_id}`);
  }

  update(_id, store): Observable<any> {
    return this.http.post(`${baseUrl}update-store/${_id}`, {store});
  }

  delete(_id): Observable<any> {
    return this.http.post(`${baseUrl}delete-store/${_id}`,{});
  }

  deleteAll(): Observable<any> {
    return this.http.post(`${baseUrl}delete-all-stores`,{});
  }

  findByTitle(storeName): Observable<any> {
    return this.http.get(`${baseUrl}filter-by-name?key=${storeName}`);
  }
}
