import { Component, OnInit } from '@angular/core';
import { Person} from './../model/app.person.model';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import { InfoService} from './../services/app.info.service';
import { Role } from './../model/app.role.model';
@Component({
  selector: 'app-viewinfo',
  templateUrl: './viewinfo.component.html',
  styleUrls: ['./viewinfo.component.css']
})
export class ViewinfoComponent implements OnInit {
  person: Person;
  persons: Array<Person>;
  role: Role;
  roles: Array<Role>;
  tableHeaders: Array<string>;
  tableHead: Array<string>;
  constructor( private serv: InfoService, private router:Router) {
    this.person = new Person(
      '',{}, '', '', '', {}, '', '', '', '', '', '', '','', '', '');
    this.persons = new Array<Person>();
    this.tableHeaders = new Array<string>();
   }

   view(email: string){
     console.log(email);
     sessionStorage.setItem('email', email);
     this.router.navigate(["/updateinfo"]);
   }

  ngOnInit() {
    for(let p in this.person){
      this.tableHeaders.push(p);
    }
    this.serv.getinfoDataPer().subscribe(
      (resp: Response)=>{
          this.persons = resp.json().data;
          console.log(resp.json().data);
      },
      error =>{
      console.log(`Error Occured ${error}`);
      }
      );


  }




}
