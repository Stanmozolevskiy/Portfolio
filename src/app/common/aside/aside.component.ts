import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

@Input() header!:string;
@Input() tags!:string[];
@Input() link!:string;
@Input() year!:string;
  
constructor() { }

  ngOnInit(): void {
  }

}
