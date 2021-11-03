import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewScFormComponent } from '../new-sc-form/new-sc-form.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  //openDialog--
  openDialog(){
    this.dialog.open(SignupComponent);
  }
}
