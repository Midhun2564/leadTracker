import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  public loginUrl:string = "https://assignment.leadtracker.cied.dev/v1/accounts/login/";
  public token:string = "";
  public user_id:string = "";
  public username:string = "";

  public login(credentials:any):Observable<any> {
    const requestBody = {
      username:credentials.username,
      password:credentials.password,
      device_id:credentials.device_id
    }
    return this.http.post(this.loginUrl,requestBody)
  }
  public getToken(){
    return this.token
  }
}
