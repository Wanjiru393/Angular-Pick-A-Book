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

  onRegister() {
    const params = new URLSearchParams();
    this.stewardService.postNotoken('register_user/', this.register).subscribe((response: any) => {
    if(response){
    localStorage.setItem('access_token', response.access);
    localStorage.setItem('username', this.register.username);

    localStorage.setItem('isRegister', 'true');
    this.router.navigate(['login']);
    console.log(response)
    
    }
    });

  }

}
