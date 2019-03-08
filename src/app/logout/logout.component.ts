import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('Username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('emailAddr');
  }

  log(): void{
    this.router.navigate(['']);
  }

}
