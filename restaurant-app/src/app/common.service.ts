import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = 'http://localhost:3000/restaurants';
  regURL = 'http://localhost:3000/';
  constructor(private _http: HttpClient) {}
  getRestaurantList() {
    return this._http.get(this.URL);
  }

  getUserList() {
    return this._http.get(this.regURL + 'users');
  }

  addRestaurant(data) {
    return this._http.post(this.URL, data);
  }

  deleteRestaurant(id) {
    return this._http.delete(`${this.URL}/${id}`);
  }

  getCurrentData(id) {
    return this._http.get(`${this.URL}/${id}`);
  }

  updateRestaurant(id, data) {
    return this._http.put(`${this.URL}/${id}`, data);
  }

  createUser(data) {
    return this._http.post(this.regURL + 'users', data);
  }
}
