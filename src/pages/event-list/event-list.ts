import { TheEvent } from "../../models/event.model";
import { EventService } from "../../services/event/event.service";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs";

/**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

  events$: Observable<TheEvent[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService: EventService) {
    this.events$ = this.eventService.getEvents()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
        }
      )
   
      ;
  }

  ionViewDidLoad() {
   
  }

}
