import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import { User } from '../model/app.user.model';
import { UserService } from './../services/app.user.service'

@Component({
  selector: 'app-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.css']
})
export class UpdateroleComponent implements OnInit {
  createForm: FormGroup;
  user: User;
  users: Array<User>;
  tableHeaders: Array<string>;
  constructor(private serv: UserService,
              private router: Router,
              private formBuilder: FormBuilder){
    this.user = new User( "", "", "", "" , "");
    this.users = new Array<User>();
    this.tableHeaders = new Array<string>();
  }

  ngOnInit() {
      for(let p in this.user){
        this.tableHeaders.push(p);
      }
      this.serv.getUserDataPer().subscribe(
          (resp: Response)=>{
              this.users = resp.json().data;
              console.log(resp.json().data);
      },
      error =>{
      console.log(`Error Occured ${error}`);
      }
      );
  }
  get f() { return this.createForm.controls; }

  clear(): void {
    this.user = new User( "","","", "", "");
 }
 save(): void {
   console.log(this.user);
   this.serv.putUserDataPer(this.user).subscribe(
    (resp: Response)=>{
      this.users = resp.json().data;
    },
    error =>{
    console.log(`Error Occured ${error}`);
    }
  );
 }

 getselectedrow(p: User): void {
  this.user = Object.assign({}, p);
}
}
