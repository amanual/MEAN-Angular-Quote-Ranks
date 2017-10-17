import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteList = [];
  newQuotes ={
    quote: "",
    author: "",
    rating:0
  }
  onSubmit(){
    this.quoteList.push(this.newQuotes);
    this.newQuotes ={
    quote:"",
    author: "",
    rating: 0
    }
  }
  
}
