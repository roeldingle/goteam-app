import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

/*team*/
import { TeamListPage } from '../pages/team/list/list';
import { TeamDetailPage } from '../pages/team/detail/detail';
import { TeamCreatePage } from '../pages/team/create/create';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseServiceProvider} from '../providers/firebase-service/firebase-service';

  // Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyBT_h0cZ0VM36K4Y6yFiNE6OYXfvD8NaIU",
    authDomain: "goteam-d0c39.firebaseapp.com",
    databaseURL: "https://goteam-d0c39.firebaseio.com",
    projectId: "goteam-d0c39",
    storageBucket: "goteam-d0c39.appspot.com",
    messagingSenderId: "220399793455"
  };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
     /*team*/
    TeamListPage,
    TeamDetailPage,
    TeamCreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
     /*team*/
    TeamListPage,
    TeamDetailPage,
    TeamCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
