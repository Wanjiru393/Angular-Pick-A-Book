import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StewardService } from 'src/app/steward.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  all_books:any

  constructor(    
    private stewardService: StewardService<any, any>,
    private route: ActivatedRoute,
    protected router: Router,) {
    
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.stewardService.get(`book_detail/?book=${id}`).subscribe((response: any) => {

      if (response) {
        this.all_books=response
        console.log(this.all_books);
        

  
      }
    })
  }

}
