

import {TheEvent} from "../../models/event.model";
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";


@Injectable()
export class EventService {


  shoppingListRef = this.db.list<TheEvent>('shooping-list');

  constructor(private db: AngularFireDatabase) {

  }

  getEvents() {
    return this.shoppingListRef;
  }

  addEvent(event: TheEvent) {
    return this.shoppingListRef.push(event);
  }


  editEvent(event: TheEvent) {
    return this.shoppingListRef.update(event.key, event);
  }

  deleteEvent(event: TheEvent) {
    this.shoppingListRef.remove(event.key);
  }


}