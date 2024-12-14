import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {
  searchQuery: string = '';
  buildings = [
    {
      id: 1,
      name: 'Gedung A',
      address: 'Jl. Merdeka No.1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Gedung B',
      address: 'Jl. Kebangsaan No.5',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Gedung C',
      address: 'Jl. Pahlawan No.10',
      image: 'https://via.placeholder.com/150',
    },
  ];

  filteredBuildings = [...this.buildings];

  constructor() {}

  filterBuildings(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredBuildings = this.buildings.filter((building) =>
      building.name.toLowerCase().includes(query)
    );
  }

  openBuildingDetail(id: number) {
    console.log(`Navigating to building detail with ID: ${id}`);
    // Tambahkan logika navigasi ke halaman detail bangunan
  }
}
