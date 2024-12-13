import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
})
export class AboutPage {
  map!: L.Map;
  baseMaps: any;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {

  }
}
