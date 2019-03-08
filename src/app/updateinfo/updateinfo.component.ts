import { Component, OnInit } from '@angular/core';
import { Person, State } from './../model/app.person.model';
import { InfoService } from './../services/app.info.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent implements OnInit {
  updateForm: FormGroup;
  state = State;
  person: Person;
  persons: Array<Person>;
  isDisabled: Boolean;
  role: string;
  email = sessionStorage.getItem('email');
  constructor(private serv: InfoService,
              private formBuilder: FormBuilder) {
    this.person = new Person(
      '',{}, '', '', '', {}, '', '', '', '', '', this.email, '', '', '', ''
    );
    this.persons = new Array<Person>();
    this.isDisabled = false;
    console.log (this.isDisabled);
   }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      MiddleName: ['', Validators.required],
      LastName: ['', Validators.required],
      Gender: ['', Validators.required],
      Age: ['', Validators.required],
      Dob: ['', Validators.required],
      FlatNo: ['', Validators.required],
      SocietyName: ['', Validators.required],
      AreaName: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      PhysicalDisability: ['', Validators.required],
      Pincode: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      Telephone: ['', Validators.required],
      EmailAddr: ['', Validators.required],
      BirthSign: ['', Validators.required],
      EducationStatus: ['', Validators.required],
  });
    this.role = sessionStorage.getItem('role');
    console.log(this.person.EmailAddr);
    console.log(this.role);

    this.serv.getByEmail(this.person.EmailAddr).subscribe(
      (resp: Response) => {
          
         
          if(resp.json().data === null) {
            this.person = new Person(
              '',{}, '', '', '', {}, '', '', '', '', '', this.email, '', '', '', ''
            );
            console.log(resp.json().data);
          }else{
            this.person = resp.json().data;
             console.log(resp.json().data);
          }
    },
    error => {
    console.log(`Error Occured ${error}`);
    }
    );
  }
  get f() { return this.updateForm.controls; }

  edit(): void {
    this.isDisabled = true;
    console.log (this.isDisabled);
  }

  update(){
    console.log(this.person);

    if (this.person.PersonalUniqueId) {
      this.serv.update(this.person).subscribe(
        (resp: Response) => {
            this.person = resp.json().data;
            console.log(resp.json().data);
            alert('User Data is Updated');
        },
        error =>{
             console.log(`Error Occured ${error}`);
        }
      );
    }
    else{
      this.serv.postinfoData(this.person).subscribe(
        (resp: Response) => {
            this.person = resp.json().data;
            console.log(resp.json().data);
            alert('New user created successfully')
        },
        error =>{
             console.log(`Error Occured ${error}`);
        }
      );
    }

    sessionStorage.removeItem('email');
  }
}
