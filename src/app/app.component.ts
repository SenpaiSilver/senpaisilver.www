import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  links = [
    new Links('Blog', 'http://blog.senpaisilver.com', 'blog'),
    new Links('GitHub', 'https://github.com/SenpaiSilver', 'github'),
    new Links('Steam', 'http://steamcommunity.com/id/senpaisilver/', 'steam'),
    // new Links('Google+', 'https://plus.google.com/+SenpaiSilver/about', 'google'),
    new Links('Twitter', 'https://twitter.com/SenpaiSilver', 'twitter'),
    new Links('YouTube', 'https://youtube.com/SenpaiSilver', 'youtube')
    // new Links('EVE Online', 'http://secure.eveonline.com/signup/?invc=503fc3ad-0989-4589-a826-e4b786948803&action=buddy')
  ];
}

class Links {
  public title: string;
  public href: string;
  public icon: string;

  public constructor(title: string, href: string, icon = 'none') {
    this.title = title;
    this.href = href;
    this.icon = icon;
  }
}
