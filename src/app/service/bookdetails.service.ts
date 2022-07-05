import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {

  constructor() { }
  bookDetails = [
    {
      id:1,
      bookName:"Encyclopaedia",
      bookDetails:"find out everything about anything",
      bookPrice:3219,
      bookImg:"https://images-na.ssl-images-amazon.com/images/I/51U-+9yPDUL._SX374_BO1,204,203,200_.jpg"
    },
    
    {
      id:2,
      bookName:"Cooking Ninja",
      bookDetails:"Transform your kitchen skills in the blink of an eye",
      bookPrice:369,
      bookImg:"https://www.verywellfamily.com/thmb/cbvHvnjX8LM7z3nJszH2kPGRXxo=/fit-in/2017x2560/filters:no_upscale():max_bytes(150000):strip_icc()/TheCompleteCookbookforYoungChefs100RecipesthatYoullLovetoCookandEat-80cb2b3c47df4a1a9ad76c4b2acc8b3f.jpg"
    },
    {
      id:3,
      bookName:"Morning,Night and Noon",
      bookDetails:"A thriilling captivating read",
      bookPrice:1149,
      bookImg:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386508089l/19287463.jpg"
    },
    {
      id:4,
      bookName:"Harry Porter",
      bookDetails:"Muggles beware the wizards are back with yet another adventure",
      bookPrice:105,
      bookImg:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg"
    },
    {
      id:5,
      bookName:"Nancy Drew",
      bookDetails:"Follow detective drew around as she takes us through her adventures",
      bookPrice:540,
      bookImg:"https://static.wikia.nocookie.net/nancydrew/images/e/ed/Nancydrewmoviecircle.jpg/revision/latest?cb=20200406065604"
    },
    {
      id:6,
      bookName:"50 shades of Grey",
      bookDetails:"Bestselling romance novel.",
      bookPrice:1200,
      bookImg:"https://upload.wikimedia.org/wikipedia/en/5/5e/50ShadesofGreyCoverArt.jpg"
    }
    
  ]
}
