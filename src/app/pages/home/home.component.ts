import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from 'src/app/service/bookdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:BookdetailsService) { }
  bookData:any;

  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
  }

}
