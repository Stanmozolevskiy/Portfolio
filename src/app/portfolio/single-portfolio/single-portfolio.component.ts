import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { getData, data } from './data';

@Component({
  selector: 'app-single-portfolio',
  templateUrl: './single-portfolio.component.html',
  styleUrls: ['./single-portfolio.component.css']
})
export class SinglePortfolioComponent implements OnInit {
  portfolioData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((query:any)=> {

        console.log(query.params.query);
        
        this.portfolioData = getData().filter((x:any)=> x.id == query.params.query)[0];
        console.log(this.portfolioData);
    })
  }

}
