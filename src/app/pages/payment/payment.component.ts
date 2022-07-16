import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  phone!: string;

  constructor() { }  

 OnInput(el:any){
  console.log(el.target.value)
 }

  OnClick(){
    console.log(this.phone)
  }


  ngOnInit(): void {
    
  }

}
