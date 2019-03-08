import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import { User } from './../model/app.user.model';
import { map } from 'rxjs/operators';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import {Role} from './../model/app.role.model';

@Injectable()
export class LoginFormService // implements CanActivate
{
    url: String;
    token: String;
    constructor(private http: Http , private router: Router){
        this.url = 'http://localhost:4080';
        this.token = sessionStorage.getItem('token');
    }
  //   canActivate(
  //     route: ActivatedRouteSnapshot,
  //     state:RouterStateSnapshot
  // ): boolean {
  //     console.log('canActivate');
  //     alert('You are not allowed to view this page. You are redirected to Error Page');
  //    // this.router.navigate(['error']);
  //     return false;
  // }
/////////////////////////////////////////////////////////////////////////////////////////////
    getRoleData(): Observable<Response> {
      let resp: Observable <Response>;
      let header: Headers = new Headers({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.token
    });
      let options: RequestOptions = new RequestOptions();
      options.headers = header;
      resp = this.http.get(`${this.url}/api/role`, options);
      console.log(resp);
      return resp;
  }
  postRoleData(role:Role): Observable<Response> {
    let resp: Observable<Response>;
    let header: Headers = new Headers({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.token
    });

    let options: RequestOptions = new RequestOptions();
    options.headers = header;

    resp = this.http.post(`${this.url}/api/role`, JSON.stringify(role), options);

    return resp;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
    getData(): Observable<Response> {
        let resp: Observable <Response>;
        resp = this.http.get(`${this.url}/api/users`);
        return resp;
    }
    postData(usr: User): Observable<Response>{
        console.log(".........................");
        let resp: Observable<Response>;
        let header = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions();
        options.headers = header;
        //let temp;
        // resp=this.http.post(`${this.url}/api/users/auth`,JSON.stringify(prd), options);
        resp = this.http.post(`${this.url}/api/users/auth`, JSON.stringify(usr), options);
        return resp;
    }

}
