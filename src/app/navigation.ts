import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import { mapOutline, listOutline, person } from 'ionicons/icons';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.html',
  styleUrls: ['navigation.scss'],
})
export class Navigation {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ mapOutline, listOutline, person });
  }
}
