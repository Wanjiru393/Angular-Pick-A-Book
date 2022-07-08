import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl } from '@angular/forms';
import { StewardService } from 'src/app/steward.service';
import { Register } from 'src/app/wrapper/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register!: Register;
  constructor(private fb:FormBuilder,
private stewardService: StewardService<any, any>,
public router: Router,

  ) {
    this.register = new Register();
   }

  ngOnInit(): void {
  }

}
