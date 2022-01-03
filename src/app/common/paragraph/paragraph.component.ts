import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  
  @Input() header!:string;
  @Input() tags!:string[];
  @Input() paragraph!:string;
  @Input() links!:string[];
  constructor() { }

  ngOnInit(): void {
  }

}
