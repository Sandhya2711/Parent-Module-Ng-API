import { Injectable } from '@angular/core';
import { User } from 'src/app/User';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http :HttpClient) { }

  public loginUserService(user:User):Observable<any>{

    console.log("inside login service");
    return this.http.post<any>("http://localhost:8081/login",user)
  }

  public registerUser(user:User):Observable<any>{

    console.log("inside register service");
    return this.http.post<any>("http://localhost:8081/registeruser",user)
  }

  
  getMatchSechdule(): Observable<any> {
   
    return this.http.get<any>("http://localhost:8081/loginSuccess");
  }
  
  }


