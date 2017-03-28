import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    {title: "Blog", href: "http://blog.senpaisilver.com"},
    {title: "GitHub", href: "https://github.com/SenpaiSilver"},
    {title: "Steam", href: "http://steamcommunity.com/id/senpaisilver/"},
    {title: "Google+", href: "https://plus.google.com/+SenpaiSilver/about"},
    {title: "@SenpaiSilver", href: "https://twitter.com/SenpaiSilver"},
    {title: "YouTube", href: "https://youtube.com/SenpaiSilver"},
    {title: "EVE Online", href: "http://secure.eveonline.com/signup/?invc=503fc3ad-0989-4589-a826-e4b786948803&action=buddy"}
  ];
  /*projects = [
    {title: "ArtifactHunter", href: "https://github.com/SenpaiSilver/ArtifactHunter"},
    {title: "FOVComparator", href: "https://github.com/SenpaiSilver/FOVComparator"}
  ]*/
}
