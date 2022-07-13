import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { StewardService } from 'src/app/steward.service';
import { Cart } from 'src/app/wrapper/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  model!:Cart;
  Cart!:FormGroup;
  username:any;
  user_id:any
  all_users:any


  constructor(private cartService : CartService,
    private stewardService: StewardService<any, any>,
    protected router: Router,
    private route: ActivatedRoute,
    private fb:FormBuilder
  ) {    this.model=new Cart();
  }



  ngOnInit(): void {
    this.Cart=this.fb.group({
      book:["",Validators.required],
      user:["",Validators.required],
      quantity:["",Validators.required]
    })
    
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this.username=localStorage.getItem('username')

    let id = this.route.snapshot.paramMap.get('id');

    this.stewardService.get("all_users/?username="+this.username).subscribe((response) => {
    if(response){
      response.forEach((user:any) => {
        this.all_users=user.id
        console.log(">>>>users",this.all_users);
        
      })
      }
    })
 
        console.log("book id?>>>",id);
        this.Cart.patchValue({
          book:id,
          user:this.all_users,
          quantity:1,
        })
        this.model=this.Cart.value

        this.stewardService.post('carts',this.model).subscribe((response:any)=>{
          if(response){
            console.log("cart>>>>>>>>",response);
            this.router.navigate(['cart']);
          }
        })
   
 
  }
    addCart(){
   
  
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}