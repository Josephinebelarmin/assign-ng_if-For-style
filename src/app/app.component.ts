import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign-toggle-button';

  text :string = 'password';
  showText = false;
  counter = 0;
  counterArray: number[]= [];

  toggle(){
this.showText = !this.showText;
this.counter = this.counter + 1;
this.counterArray.push(this.counter);

  }
  
}
