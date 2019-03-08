import { Component, OnInit } from '@angular/core';
import {Role } from './../model/app.role.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import {InfoService} from './../services/app.info.service';
import {UserService} from './../services/app.user.service';
import { Person } from '../model/app.person.model';
import { User } from '../model/app.user.model';

@Component({
  selector: 'app-acceptinfo',
  templateUrl: './acceptinfo.component.html',
  styleUrls: ['./acceptinfo.component.css']
})
export class AcceptinfoComponent implements OnInit {
  user: User;
  users: Array<User>;
  tableHead: Array<string>;
  tableHeader: Array<string>;
  person: Person;
  persons: Array<Person>;
  constructor(
              private fserv: InfoService,
              private userv: UserService,
              private router: Router,
              private formBuilder: FormBuilder){
    this.user = new User( "", "" , "", "", "");
    this.users = new Array<User>();
    this.tableHead = new Array<string>();
              }

  ngOnInit() {
    for(let q in this.user){
      this.tableHead.push(q);
    }
    this.userv.getUserData().subscribe(
        (resp: Response)=>{
            this.users = resp.json().data;
            console.log(resp.json().data);
    },
    error =>{
    console.log(`Error Occured ${error}`);
    }
    );

    for(let r in this.persons){
      this.tableHeader.push(r);
    }
    this.fserv.getinfoData().subscribe(
      (resp: Response)=>{
          this.persons = resp.json().data;
          console.log(resp.json().data);
      },
      error =>{
      console.log(`Error Occured ${error}`);
      }
      );
  }

    accept(user: User) {
      this.userv.postUserDataPer(user).subscribe(
        (resp: Response) => {
          this.user = resp.json().data;
          console.log(resp.json().data);
          this.userv.deleteUserData(user.EmailAddr).subscribe(
            (res: Response) => {
              this.user = res.json().data;
              console.log(res.json().data);
            },
            error => {
              console.log(`Errror Occured ${error}`);
            }
          );
        },
        error => {
          console.log(`Errror Occured ${error}`);
        }
      );
    }

    acceptInfo(person: Person) {
      if(person.PersonalUniqueId === null){
        this.fserv.postinfoDataPer(person).subscribe(
          (resp: Response) => {
            this.person = resp.json().data;
            console.log(resp.json().data);
          },
          error => {
            console.log(`Errror Occured ${error}`);
          }
        );
      }
      else{
        this.fserv.update(person).subscribe(
          (resp: Response) => {
            this.person = resp.json().data;
            console.log(resp.json().data);
          },
          error => {
            console.log(`Errror Occured ${error}`);
          }
        );

        this.fserv.deleteInfoData(person.EmailAddr).subscribe(
          (res: Response) => {
            this.person = res.json().data;
            console.log(res.json().data);
          },
          error => {
            console.log(`Errror Occured ${error}`);
          }
        );
      }
    }

    reject(email: string) {
      this.fserv.deleteInfoData(email).subscribe(
        (resp: Response)=>{
            this.persons = resp.json().data;
            console.log(resp.json().data);

            this.userv.deleteUserData(email).subscribe(
              (res: Response)=>{
                  this.users = res.json().data;
                  console.log(res.json().data);
          },
          error =>{
          console.log(`Error Occured ${error}`);
          }
          );
        },
        error =>{
        console.log(`Error Occured ${error}`);
        }
        );
    }
}
