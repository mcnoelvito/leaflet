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
      name: 'Kompleks Kraton Yogyakarta',
      address: 'Kel. Panembahan, Kem. Kraton, Kota Yogyakarta, Prov. Daerah Istimewa Yogyakarta',
      image: 'assets/icon/Kraton_Yogyakarta_Pagelaran.jpg',
      description: 'Merupakan sebuah kompleks bangunan keraton tempat tinggal keluarga Kesultanan Ngayogyakarta Hadiningrat',
    },
    {
      id: 2,
      name: 'Kompleks Istana Kepresidenan Gedung Agung',
      address: 'Jl. Jenderal Ahmad Yani Kel. Ngupasan, Kem. Gondomanan, Kota Yogyakarta, Prov. Daerah Istimewa Yogyakarta',
      image: 'assets/icon/Gedung_Agung_Istana_Yogyakarta.jpg',
      description: 'Merupakan sebuah kompleks bangunan salah satu istana kepresidenan Republik Indonesia yang terletak di Kota Yogyakarta',
    },
    {
      id: 3,
      name: 'Puro Pakualaman',
      address: 'Jl. Sultan Agung No. 66 Kel. Purwokinanti, Kem. Pakualaman, Kota Yogyakarta, Prov. Daerah Istimewa Yogyakarta',
      image: 'assets/icon/Puro_pakualaman.jpg',
      description: 'Merupakan sebuah kompleks bangunan keraton tempat tinggal keluarga Kadipaten Pakualaman',
    },
    {
      id: 4,
      name: 'Gedung DPRD DIY',
      address: 'Jl. Malioboro no. 54 Kel. Suryatmajan, Kem. Danurejan, Kota Yogyakarta, Prov. Daerah Istimewa Yogyakarta',
      image: 'assets/icon/DPRD_DIY.jpg',
      description: 'Merupakan sebuah kompleks gedung DPRD DIY dinamakan Loge Mataram (Nama resmi dalam bahasa Belanda). Nama Loge (Loji) bermakna rumah atau gedung yang besar (Inggris: Lodge). Nama Mataram digunakan untuk menunjukkan lokasi loji yakni di wilayah Mataram. Gedung ini pernah digunakan sebagai tempat dicetuskannya politik luar negeri Republik Indonesia yang bebas aktif oleh Kabinet/Wapres Drs. Moh. Hatta pada 2 September 1948 di depan sidang BPKNIP.',
    },
    {
      id: 5,
      name: 'Stasiun Kereta Api Tugu Yogyakarta',
      address: 'Jl. P. Mangkubumi  Kel. Sosromenduran, Kem. Gedongtengen, Kota Yogyakarta, Prov. Daerah Istimewa Yogyakarta',
      image: 'assets/icon/DPRD_DIY.jpg',
      description: 'Merupakan sebuah stasiun kereta api utama dan terbesar di Kota Yogyakarta dan DIY.',
    }
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
