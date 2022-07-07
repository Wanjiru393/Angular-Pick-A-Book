import { Component, OnInit } from '@angular/core';
import { StewardService } from 'src/app/steward.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

all_books:any
  constructor(
    private stewardService: StewardService<any, any>,

  ) { }

  ngOnInit(): void {
    this.stewardService.get('all_books/').subscribe((response: any) => {

      if (response) {
        this.all_books=response
        console.log(this.all_books);
        

  
      }
    })
  }

}
