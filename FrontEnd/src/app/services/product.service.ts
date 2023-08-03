import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    const accessToken = window.localStorage.getItem("accessToken");
    const url = this.apiUrl + "/products";
    let headersAPI = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken??''});
    return this.http.get(url, { headers: headersAPI });
  }
}
