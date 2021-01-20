import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllUsers, Users } from 'src/app/_models/users/users.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  getUserInfo(): Observable<Users>{
    return this._http.get<Users>(environment.apiUrl + '/users/2' );
  }

  getAllUsers(): Observable<AllUsers[]>{
    return this._http.get<AllUsers[]>(environment.apiUrl + '/users?page=2')
  }



}
