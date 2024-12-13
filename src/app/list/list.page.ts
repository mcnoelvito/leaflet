import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class listPage {
  map!: L.Map;
  baseMaps: any;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {

  }
}
