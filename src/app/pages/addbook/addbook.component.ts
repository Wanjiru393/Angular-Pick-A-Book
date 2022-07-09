import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,NgForm,Validator, Validators }  from '@angular/forms';
import { Router } from '@angular/router';
import { StewardService } from 'src/app/steward.service';
import { Books } from 'src/app/wrapper/books';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  inImgLink = '';
  inItemName = '';
  model!:Books;
  username:any;
  Books!:FormGroup;
  users:any
  categories:any;
  @Output() newItem = new EventEmitter();

  constructor(
    private stewardService: StewardService<any, any>,
    private fb:FormBuilder,
    private router:Router,

  ) {
    this.model=new Books();
   }

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
    this.Books=this.fb.group({
      title:["",Validators.required],
      publisher:["",Validators.required],
      author:["",Validators.required],
      description:["",Validators.required],
      condition:["",Validators.required],
      user:["",Validators.required],
      book_image:["",Validators.required],
      category:["",Validators.required],
      price:["",Validators.required],
    })
    // fileChange(event){
    //   if(event.target.files.length>0){
    //     const file=event.target.files[0]
    //     this.Books.get['file'].set(file)

    //   }

    // }
  
    this.username=localStorage.getItem('username')
    

    this.stewardService.get("all_categories/").subscribe((response) => {
      if(response){
        this.categories=response
        
      }
    })

    this.stewardService.get("all_users/?username="+this.username).subscribe((response) => {
      if(response){
        response.forEach((user:any) => {
            console.log(user.id);
            this.Books.patchValue({
              user:user.id
              
            })
                            
        })                
      }
    })
    

  }
  bookCover(event:any){
     if(event.target.files.length>0){
        const file=event.target.files[0];
        // this.Books.get('book_image').setValue(file)
        this.Books.patchValue({
          book_image:file

        })
        // this.Books.setValue({
        //   book_image: file
        // });
  }
}
  onCreateBooks(){
    // this.model.title=this.Books.value.title
    // this.model.publisher=this.Books.value.publisher
    // this.model.description=this.Books.value.description
    // this.model.condition=this.Books.value.condition
    // // this.model.book_image=this.Books.value.book_image
    // this.model.category=this.Books.value.category
    // this.model.price=this.Books.value.price
    
    this.model=this.Books.value

    this.stewardService.postFormDataMultipart('create_books/',this.model).subscribe((response:any)=>{

      if(response){
        console.log(response);
        this.router.navigate(['categories']);

        
      }
    })


  }


    }

