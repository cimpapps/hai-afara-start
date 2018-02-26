import { EventService } from "../services/event/event.service";
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import { FIREBASE_CONFIG } from "./firebase.credentials";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { Camera } from "@ionic-native/camera";
import { EventListPage } from "../pages/event-list/event-list";
import { AboutPage } from "../pages/about/about";

@NgModule({
  declarations: [
    MyApp,
    EventListPage, 
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    EventListPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    EventService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
