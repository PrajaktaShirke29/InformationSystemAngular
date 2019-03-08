import { Component, OnInit } from '@angular/core';
import {Role } from './../model/app.role.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import { UserService} from './../services/app.user.service';
import { User } from '../model/app.user.model';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  createForm: FormGroup;
  user: User;
  isHidden: boolean;
  users: Array<User>;
  tableHeaders: Array<string>;

  constructor(private serv: UserService,
              private router: Router,
              private formBuilder: FormBuilder){
    this.user = new User( "", "" , "", "", "");
    this.users = new Array<User>();
    this.tableHeaders = new Array<string>();
    this.isHidden = false;
  }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      Username: ['', Validators.required],
      EmailAddr: [  this.user.EmailAddr,
        Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
      ])],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      RoleId: ['', Validators.required]
  });
  }
  get f() { return this.createForm.controls; }

  clear(): void {
    this.user = new User("", "", "", "", "");
 }
 save(): void {
   console.log(this.user);
   this.isHidden = true;
   this.user = this.createForm.value;
   sessionStorage.setItem('email', this.user.EmailAddr);
   this.serv.postUserData(this.user).subscribe(
    (resp: Response)=>{
       this.users.push(resp.json().data);
       this.router.navigate(["/updateinfo"]);
    },
    error =>{
    console.log(`Error Occured ${error}`);
    }
  );
 }
}

