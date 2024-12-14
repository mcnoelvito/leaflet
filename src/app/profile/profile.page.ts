import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {
  user = {
    name: 'Michael Noelvito Husodo',
    email: 'noelvitohu@gmail.com',
    avatar: 'https://www.gravatar.com/avatar?d=mp',
  };

  editProfile() {
    console.log('Edit profile clicked');
    // Tambahkan logika untuk mengedit profil
  }

  logout() {
    console.log('Logout clicked');
    // Tambahkan logika untuk logout
  }
}
