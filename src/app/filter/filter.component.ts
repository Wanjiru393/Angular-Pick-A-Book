import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StewardService } from '../steward.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  all_books:any

  constructor(
    private stewardService: StewardService<any, any>,
    private route: ActivatedRoute,

    protected router: Router,
  ) { }

  ngOnInit(): void {
    let category = this.route.snapshot.paramMap.get('category');

    this.stewardService.get(`all_books/?category=${category}`).subscribe((response: any) => {

      if (response) {
        this.all_books=response
        console.log(this.all_books);
        

  
      }
    })
  }
  viewBook(id:any){
    this.router.navigate(['book',id])
  }

}
