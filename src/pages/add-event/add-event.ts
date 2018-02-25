import {TheEvent} from "../../models/event.model";
import {EventService} from "../../services/event/event.service";
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event: TheEvent = {
    title: undefined,
    date: undefined,
    description: undefined,
    price: undefined
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService: EventService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  addEvent(event: TheEvent) {
    this.eventService.addEvent(event).then(
      res => {
        this.navCtrl.setRoot("EventListPage", res.key);
        console.log(res.key);
      }
    );
  }
}
