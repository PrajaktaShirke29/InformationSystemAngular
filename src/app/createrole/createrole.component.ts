import { Component, OnInit } from '@angular/core';
import {Role } from './../model/app.role.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import {LoginFormService} from './../services/app.login.service';

@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.css']
})
export class CreateroleComponent implements OnInit {
  createForm: FormGroup;
  role: Role;
  roles: Array<Role>;
  tableHeaders: Array<string>;
  constructor(private serv: LoginFormService,
              private router: Router,
              private formBuilder: FormBuilder){
    this.role = new Role( "", "" , "");
    this.roles = new Array<Role>();
    this.tableHeaders = new Array<string>();
  }

  ngOnInit() {
      for(let p in this.role){
        this.tableHeaders.push(p);
      }
      this.serv.getRoleData().subscribe(
          (resp: Response)=>{
              this.roles = resp.json().data;
              console.log(resp.json().data);
      },
      error =>{
      console.log(`Error Occured ${error}`);
      }
      );
  }
  get f() { return this.createForm.controls; }

  clear(): void {
    this.role = new Role( "", "", "");
 }
 save(): void {
   console.log(this.role);
   this.serv.postRoleData(this.role).subscribe(
    (resp: Response)=>{
       this.roles.push(resp.json().data);
    },
    error =>{
    console.log(`Error Occured ${error}`);
    }
  );
 }
}
