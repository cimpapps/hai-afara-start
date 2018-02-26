import { Component } from '@angular/core';

import { EventListPage } from '../event-list/event-list';
import { AboutPage } from '../about/about';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventListPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
