import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  inImgLink = '';
  inItemName = '';

  @Output() newItem = new EventEmitter();

  constructor() { }

  ClearBtn = () => {
    this.inImgLink = '';
    this.inItemName = '';
  };

  SubmitBtn = () =>{
    if (this.inImgLink === '' || this.inItemName === ''){
      return;
    }
    this.newItem.emit({ name: this.inItemName, img: this.inImgLink});
  };

  ngOnInit(): void {
  }

}
