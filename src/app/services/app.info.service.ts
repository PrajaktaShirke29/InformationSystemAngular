import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import { User } from './../model/app.user.model';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router';
import {Role} from './../model/app.role.model'
import { Person } from '../model/app.person.model';

@Injectable()
export class InfoService{
    url: String;
    token: String;
    constructor(private http: Http){
        this.url = 'http://localhost:4080';
        this.token = sessionStorage.getItem('token');
    }
//////////////////////////////////////////////////////////////////////////////////////////////////
// Temp info
  getinfoData(): Observable<Response> {
    let resp: Observable <Response>;
    let header: Headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
  });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.get(`${this.url}/api/info`, options);
    console.log(resp);
    return resp;
  }

  postinfoData(person: Person) : Observable<Response>{
    let resp: Observable <Response>;
    let header: Headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
  });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/api/info`, JSON.stringify(person) , options);
    console.log(resp);
    return resp;
  }

  deleteInfoData(email): Observable<Response> {
    let resp: Observable<Response>;
    let header: Headers = new Headers({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.token
    });

    let options: RequestOptions = new RequestOptions();
    options.headers = header;

    resp = this.http.delete(`${this.url}/api/info/${email}`, options);

    return resp;
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Permanent info
    getinfoDataPer(): Observable<Response> {
      let resp: Observable <Response>;
      let header: Headers = new Headers({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.token
    });
      let options: RequestOptions = new RequestOptions();
      options.headers = header;
      resp = this.http.get(`${this.url}/api/info/permanent`, options);
      console.log(resp);
      return resp;
  }

  getByEmail(email): Observable<Response> {
    let resp: Observable<Response>;
    let header: Headers = new Headers({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.token
    });

    let options: RequestOptions = new RequestOptions();
    options.headers = header;

    resp = this.http.get(`${this.url}/api/info/per/${email}`, options);

    return resp;
  }

  postinfoDataPer(person: Person) : Observable<Response>{
    let resp: Observable <Response>;
    let header: Headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
  });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/api/info/permanent`, JSON.stringify(person) , options);
    console.log(resp);
    return resp;
  }


  update(info : Person): Observable<Response> {
    let resp: Observable<Response>;
    let header: Headers = new Headers({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.token
    });

    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    console.log(info.PersonalUniqueId);
    resp = this.http.put(`${this.url}/api/info/permanent/${info.PersonalUniqueId}`, JSON.stringify(info), options);
    return resp;
  }
}
