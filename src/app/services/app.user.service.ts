import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import { User } from './../model/app.user.model';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router';


@Injectable()
export class UserService{
    url: String;
    token: String;
    constructor(private http: Http){
        this.url = 'http://localhost:4080';
        this.token = sessionStorage.getItem('token');
    }
//////////////////////////////////////////////////////////////////////////////////////
  // Temp table
    getUserData(): Observable<Response> {
      let resp: Observable <Response>;
      let header: Headers = new Headers({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.token
    });
      let options: RequestOptions = new RequestOptions();
      options.headers = header;
      resp = this.http.get(`${this.url}/api/users`, options);
      console.log(resp);
      return resp;
  }

  postUserData(user : User) : Observable<Response>{
    let resp: Observable <Response>;
    let header: Headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
  });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/api/users/create`, JSON.stringify(user) , options);
    console.log(resp);
    return resp;
  }

  deleteUserData(email): Observable<Response> {
    let resp: Observable <Response>;
    let header: Headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
  });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.delete(`${this.url}/api/users/${email}` , options);
    console.log(resp);
    return resp;
  }

  //////////////////////////////////////////////////////////////////////////////////////////
  // Permanent Table
  getUserDataPer(): Observable<Response> {
    let resp: Observable <Response>;
    let header: Headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
  });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.get(`${this.url}/api/users/permanent`, options);
    console.log(resp);
    return resp;
}
  postUserDataPer(user : User) : Observable<Response>{
    let resp: Observable <Response>;
    let header: Headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
  });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/api/users/create/permanent`, JSON.stringify(user) , options);
    console.log(resp);
    return resp;
  }

  putUserDataPer(user: User): Observable<Response> {
    let id = user._id;
    let resp: Observable <Response>;
    let header: Headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
  });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.put(`${this.url}/api/users/permanent/${id}`, JSON.stringify(user) , options);
    console.log(resp);
    return resp;
  }

}
