import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   role = sessionStorage.getItem('role');
   user = sessionStorage.getItem('Username');
   isAdmin: boolean;
   isOperator: boolean;
   isUserAccess: boolean;
  constructor() {
    this.isAdmin = false;
    this.isOperator = false;
    this.isUserAccess = false;
   }

  ngOnInit() {
    console.log(this.role);
    if (this.role === 'Administrator') {
      console.log("Admin");
      this.isAdmin = true;
    }
    else if (this.role === 'Operator') {
      console.log("Operator");
      this.isOperator = true;
    }
    else if (this.role === 'AccessUser') {
      this.isUserAccess = true;
    }
  }

}
