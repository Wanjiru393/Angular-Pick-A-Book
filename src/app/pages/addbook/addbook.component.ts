import { Component, OnInit } from '@angular/core';

import { BookdetailsService } from 'src/app/service/bookdetails.service';

import { StewardService } from 'src/app/steward.service';


@Component({
  selector: 'addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

all_books:any
  constructor(
    private stewardService: StewardService<any, any>,

  ) { }

  ngOnInit(): void {
    this.stewardService.get('create_books/').subscribe((response: any) => {

      if (response) {
        this.all_books=response
        console.log(this.all_books);
        

  
      }
    })
  }

}
