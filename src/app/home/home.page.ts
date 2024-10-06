import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;
  baseMaps: any;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    // Membuat base map layers
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: 'Google Satellite'
    });

    const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    const cartoDBPositron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
    });


    // Inisialisasi map dengan base layer OSM
    this.map = L.map('mapId', {
      center: [-7.7742, 110.37],
      zoom: 20,
      layers: [osm] // Layer default
    });

    // Buat ikon baru
    const customIconUrl = 'assets/icon/Lokasi.png';
    const customIcon = L.divIcon({
      iconUrl: customIconUrl,  // Ganti ini dengan URL ikon Anda
      iconSize: [50, 50],  // Ukuran ikon dalam pixel [width, height]
      iconAnchor: [25, 50],  // Anchor poin pada ikon (titik dimana ikon 'terpasang' pada posisi marker)
  });


    // Menambahkan marker dengan popup
    const marker = L.marker([-7.7742, 110.37], { icon: customIcon }).addTo(this.map);
    marker.bindPopup('<b>Lokasi Marker</b><br>Ini adalah Wajur.').openPopup();

    // Layer control untuk base map
    this.baseMaps = {
      "OpenStreetMap": osm,
      "Google Satellite": googleSatellite,
      "ESRI World Imagery": esriWorldImagery,
      "CartoDB Positron": cartoDBPositron
    };

    // Menambahkan kontrol layer ke peta
    L.control.layers(this.baseMaps).addTo(this.map);
  }
}
