import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  fbLogin(){
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider).then(() =>{
        firebase.auth().getRedirectResult().then(r => console.log(r));
      });
  }

}
