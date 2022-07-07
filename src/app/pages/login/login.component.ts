import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl } from '@angular/forms';
import { StewardService } from 'src/app/steward.service';
import { Login } from 'src/app/wrapper/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: Login;
  constructor(private fb:FormBuilder,
private stewardService: StewardService<any, any>,
public router: Router,
) { 
  this.login = new Login();

}

  ngOnInit(): void {
 
  }
 
  onLoggedin() {
    const params = new URLSearchParams();
    this.stewardService.postNotoken('api/token/', this.login).subscribe((response: any) => {
    if(response){
    localStorage.setItem('access_token', response.access);
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['']);
    
    }
    });
    
    }
    
    }

