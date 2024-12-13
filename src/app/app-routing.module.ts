import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Navigation } from './navigation';
const routes: Routes = [



];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: Navigation,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
          },
          {
            path: 'profile',
            loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
          },
          {
            path: 'tabs',
            loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }


