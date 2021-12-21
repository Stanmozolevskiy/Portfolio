import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  age!:number;
  iconSize:number = 25;
  constructor() { }

  ngOnInit(): void {
   this.age = (new Date().getFullYear() -1990);
  }

}
