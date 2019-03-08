import { Component, OnInit } from '@angular/core';
import {User } from './../model/app.user.model';
import {LoginFormService} from './../services/app.login.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
  user: User;
  users: Array<User>;
  message: string;
  constructor(private serve: LoginFormService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.user = new User( "" , "", "", "", "");
    this.users = new Array<User>();

   }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }
  clear(): void {
    this.user = new User( "", "", "", "", "");
 }
 auth(): void {
  this.submitted = true;

  if (this.loginForm.invalid) {
    return;
}
  console.log(this.user);

  this.serve.postData(this.user).subscribe(
    (resp: Response) => {
      console.log(resp.json());
      if (resp.json().token) {
        sessionStorage.setItem('token', resp.json().token);
        sessionStorage.setItem('email', resp.json().emailAddr);
        sessionStorage.setItem('Username', this.user.Username);
        sessionStorage.setItem('role', resp.json().role);

        this.router.navigate(['admin']);
      }
      else {
        this.message = "Username Or Password not found!"
        this.router.navigate(['']);
      }
    },
    error => {
      alert("Invalid credentials");
      console.log(`Error Occured ${error}`);
    }
  );
}


}
