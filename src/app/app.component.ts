import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apc-wifi';
  lat: number = 51.678418;
  lng : number= 7.809007;
  zoom: number = 9

  locations = [
    {lat: 51.143683, lng: 71.528799},
    {lat: 51.12132, lng: 71.40637},
    {lat: 51.12669, lng: 71.46402},
    {lat: 51.170658, lng: 71.440618},
    {lat: 51.171259, lng: 71.428897},
    {lat: 51.18523, lng: 71.40838},
    {lat: 51.18015, lng: 71.40819},
    {lat: 51.17893, lng: 71.41314},
    {lat: 51.13093, lng: 71.45675},
    {lat: 51.17694, lng: 71.41785},
    {lat: 51.16962, lng: 71.387066},
    {lat: 51.18004, lng: 71.40714},
    {lat: 51.148979, lng: 71.480719}
  ]
}
