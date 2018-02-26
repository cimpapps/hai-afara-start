import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { EventListPage } from '../event-list/event-list';
import { EventDetailPage } from '../event-detail/event-detail';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents:[
  
  ]
})
export class TabsPageModule {}
