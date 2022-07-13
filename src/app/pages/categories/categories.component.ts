import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,NgForm,Validator, Validators }  from '@angular/forms';

import { BookdetailsService } from 'src/app/service/bookdetails.service';

import { StewardService } from 'src/app/steward.service';
import { Cart } from 'src/app/wrapper/cart';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
model!:Cart;
username:any;
users:any;
Cart!:FormGroup;


all_books:any
  constructor(
    private stewardService: StewardService<any, any>,
    protected router: Router,
    private fb:FormBuilder
  ) {    this.model=new Cart();
  }

  ngOnInit(): void {
    this.Cart=this.fb.group({
      book:["",Validators.required],
      user:["",Validators.required],
      quantity:["",Validators.required]
    })

    this.stewardService.get('all_books/').subscribe((response: any) => {

      if (response) {
        this.all_books=response
        console.log(this.all_books);
        

  
      }
    })
    this.username=localStorage.getItem('username')
 
    this.stewardService.get("all_users/?username="+this.username).subscribe((response) => {
      if(response){
        response.forEach((user:any) => {
            console.log(user.id);
            this.Cart.patchValue({
              user:user.id
            })
        })
      }
    })
 
  }
  viewBook(id:any){
    this.router.navigate(['book',id])
  }
  addCart(id:any){
    this.router.navigate(['cart',id])
  }
  // addCart(){
  //   this.model=this.Cart.value

  //   this.stewardService.post('carts/',this.model).subscribe((response:any)=>{
  //     if(response){
  //       console.log(response);
  //       this.router.navigate(['cart']);
  //     }
  //   })
  // }

}
