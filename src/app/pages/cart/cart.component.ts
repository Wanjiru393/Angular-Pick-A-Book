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
  cart_items:any
  total:any
  grandtotal:any=[]
  finalTotal:any


  constructor(private cartService : CartService,
    private stewardService: StewardService<any, any>,
    protected router: Router,
    private route: ActivatedRoute,
    private fb:FormBuilder
  ) {    this.model=new Cart();
  }



  ngOnInit(): void {
  
    this.username=localStorage.getItem('username')
    console.log("username",this.username);
    


    this.stewardService.get(`all_users/?username=${this.username}`).subscribe((response) => {
 
      if (response) {
        response.forEach((user:any)=>{
          this.stewardService.get(`carts?user=${user.id}`).subscribe((response: any) => {

            if (response) {
             console.log(response);
             this.cart_items=response

             response.map((res:any)=>{

              this.total=(res.book.price*res.quantity)
              this.grandtotal.push(this.total)

              this.finalTotal= this.grandtotal.reduce((a:any, b:any) => a + b, 0)
                      
             })
            // console.log(this.finalTotal);
            
            }
          })
              
        })
      }
    })
  }

  removeItem(id:any){
    console.log("id>>",id);
    

    this.stewardService.delete(`carts?cart=${id}`).subscribe((response:any)=>{
      if(response){
        console.log(response);
        window.location.reload();
        this.router.navigate(['cart']);

      }
    })
  }
  emptycart(){
    this.stewardService.delete(`empty_carts`).subscribe((response:any)=>{
      if(response){
        console.log(response);
        window.location.reload();
        this.router.navigate(['cart']);

      }
    })
    }

}