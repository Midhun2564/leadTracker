import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient,private loginService:LoginServiceService) { }
  private userInfoUrl = "https://assignment.leadtracker.cied.dev/v1/accounts/user/85NPW/";
  private graph_stage_url = "https://assignment.leadtracker.cied.dev/v1/leads/dashboard/graph/?stage_type=active";
  private probability_url = "https://assignment.leadtracker.cied.dev/v1/leads/probability/analysis/?stage_type=active";
  private lead_url = "https://assignment.leadtracker.cied.dev/v1/leads/stage/";
  private leadList_url = "https://assignment.leadtracker.cied.dev/v1/leads/?stage_type=active&limit=10&offset=0&search=&ordering=-probability"

  public getUserInfo():Observable<any> {
    return this.http.get<any>(this.userInfoUrl)
  }

  public getGraphAndStageSetails(): Observable<any> {
    return this.http.get(this.graph_stage_url)
  }
  public getProbability(): Observable<any> {
    return this.http.get(this.probability_url)
  }
  public getActiveLeads(): Observable<any> {
    return this.http.get(this.lead_url)
  }
  public getLeadsList(): Observable<any> {
    return this.http.get(this.leadList_url)
  }
}
