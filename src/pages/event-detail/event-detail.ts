import {TheEvent} from "../../models/event.model";
import {EventService} from "../../services/event/event.service";
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  event: TheEvent;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService: EventService) {
    this.event = this.navParams.get('event');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  editEvent(event: TheEvent) {
    this.eventService.editEvent(event);
    this.navCtrl.setRoot('EventListPage');
  }

  deleteEvent(event: TheEvent) {
    this.eventService.deleteEvent(event);
    this.navCtrl.setRoot('EventListPage');
  }



}
