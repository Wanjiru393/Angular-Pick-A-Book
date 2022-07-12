import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookdetailsService } from 'src/app/service/bookdetails.service';
import { StewardService } from 'src/app/steward.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  all_books:any
  all_categories:any

  constructor(private service:BookdetailsService,
    private stewardService: StewardService<any, any>,
    protected router: Router,) { }
  bookData:any;
  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
    this.stewardService.get('all_books/').subscribe((response: any) => {

      if (response) {
        this.all_books=response 
        this.all_books=this.all_books.slice(0,4)
        console.log(">>>>>",this.all_books);
        

  
      }
    })
    this.stewardService.get('all_categories/').subscribe((response: any) => {

      if (response) {
        this.all_categories=response
        console.log(this.all_categories);  
      }
    })
  }
  viewBook(id:any){
    this.router.navigate(['book',id])
  }
  viewCategory(category:any){
    this.router.navigate(['filter',category])
  }
}
