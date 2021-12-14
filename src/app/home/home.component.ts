import { Component, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
faBriefcase = faBriefcase;
faEnvelope = faEnvelope;

  constructor(private meta: Meta,private titleService: Title,) { }

  ngOnInit(): void {
    this.meta.addTag({
      name: 'Stan Mozolevskiy',
      content: 'Software Engineer'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 11.2.10 et bootstrap 4.6.0' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

}
