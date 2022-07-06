import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from 'src/app/service/bookdetails.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:BookdetailsService) { }
  bookData:any;
  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
  }

}
