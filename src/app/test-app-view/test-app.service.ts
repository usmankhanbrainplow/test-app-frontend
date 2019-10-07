import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestAppService {
  ServerUrlLocal = 'https://dev_apis.choicegenie.com/';
  user;
  constructor(private http: HttpClient, private _https: Http) { }

  get_user() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._https.get(' http://192.168.29.170:8000/test/pro_get_post/', { headers: headers }).map((response: any) => response.json())

  }

  addproduct(productname, productquantity, productprice, productdes) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    return this._https.post(' http://192.168.29.170:8000/test/pro_get_post/',
      {
        'p_name': productname,
        'p_quantity': productquantity,
        'p_price': productprice,
        'p_des': productdes

      }, { headers: headers }).map((response: any) => response.json())
  }
  Deleteproduct(pk: any) {
    return this._https.delete(' http://192.168.29.170:8000/test/pro_edit_delete/' + pk).map(response => response.json());
  }
  updateproducts(pk, productname, productquantity, productprice, productdes) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    return this._https.put(' http://192.168.29.170:8000/test/pro_edit_delete/' + pk,
      {
        'p_name': productname,
        'p_quantity': productquantity,
        'p_price': productprice,
        'p_des': productdes

      }, { headers: headers }).map((response: any) => response.json())
  }
}

