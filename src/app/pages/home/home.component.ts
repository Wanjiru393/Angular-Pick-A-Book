import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private http: HttpClient) {}
  books = [];

  loadBooks() {
    this.http.get('https://localhost:44393/api/books/').subscribe((response) => {
      alert(JSON.stringify(response));
    });
  }
  

}
