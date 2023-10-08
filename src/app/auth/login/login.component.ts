import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
