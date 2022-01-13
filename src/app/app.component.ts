import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Portfolio';
  opened:boolean = true;

  onClick(){
    this.opened == false ? this.opened = true : this.opened = false; 
  }

}
