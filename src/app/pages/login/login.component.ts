import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
  })
  }
  loginUser(){
    console.log(this.loginForm.value);
  }
}
