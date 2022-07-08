import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from 'src/app/service/bookdetails.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private service:BookdetailsService) { }
  bookData:any;

  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
  }

}
