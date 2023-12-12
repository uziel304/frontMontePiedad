import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private endPoint:string;
  public api:any;
  constructor(private http: HttpClient) {
    this.endPoint = environment.api;
    this.api = null;
  }
  // general function  of connect
  public services(method:String,service:String,data:any= null):Observable<any>{
     switch(method){
      case "POST": this.api = this.http.post(`${this.endPoint}/${service}`, data); break;
      case "GET":  this.api = this.http.get(`${this.endPoint}/${service}`); break;
    };
    return  this.api;
  }
}
