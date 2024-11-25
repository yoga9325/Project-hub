import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllUsers } from '../contract/get-all-users';
import { Observable } from 'rxjs';
import { GetAllProjects } from '../contract/get-all-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectHubService {

  constructor(private http: HttpClient) { }

  public baseUrl: string = "https://projectapi.gerasim.in/api/CollegeProject/";

  Header = new HttpHeaders()
    .set('Access-Control-Allow-Origin', 'https://projectapi.gerasim.in/api/CollegeProject')
    .set('content-type', 'application/json');




  public getAllUsers(): Observable<GetAllUsers[]> {
    return this.http.get<GetAllUsers[]>(this.baseUrl + "GetAllUsers", { headers: this.Header });
  }

  public getAllProjects(): Observable<GetAllProjects[]> {
    return this.http.get<GetAllProjects[]>(this.baseUrl + "GetAllProjects", { headers: this.Header });
  }

  public getProjectById(id: any): Observable<GetAllProjects> {
    return this.http.get<GetAllProjects>(this.baseUrl  + id, { headers: this.Header });
  }
}