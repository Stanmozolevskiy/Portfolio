import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single-portfolio',
  templateUrl: './single-portfolio.component.html',
  styleUrls: ['./single-portfolio.component.css']
})
export class SinglePortfolioComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  tags = ["React", "Mongo DB", "HTML5", "Heroku", "CSS3", "Apollo", "Node.js", "Express"];
  year = "april 2019";
  link = "https://multiplayer-chess.netlify.com/";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((query:any)=> {
        console.log(query.params.query);
    })
  }

}
