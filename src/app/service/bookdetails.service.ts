import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {

  constructor() { }
  bookDetails = [
    {
      id:1,
      bookName:"50 shades of Grey",
      bookDetails:"Bestselling romance novel.",
      bookPrice:1200,
      bookImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      bookName:"Cooking Ninja",
      bookDetails:"Transform your kitchen skills in the blink of an eye",
      bookPrice:369,
      bookImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      bookName:"Morning,Night and Noon",
      bookDetails:"A thriilling captivating read",
      bookPrice:1149,
      bookImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      bookName:"Nancy Drew",
      bookDetails:"Follow detective drew around as she takes us through her adventures",
      bookPrice:540,
      bookImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      bookName:"Harry Porter",
      bookDetails:"Muggles beware the wizards are back with yet another adventure",
      bookPrice:105,
      bookImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      bookName:"Encyclopaedia",
      bookDetails:"find out everything about anything",
      bookPrice:3219,
      bookImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]
}
