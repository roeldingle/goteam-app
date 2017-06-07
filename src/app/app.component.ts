import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { FirstRunPage } from '../app';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TeamListPage } from '../pages/team/list/list';

@Component({
  templateUrl:  '../pages/layouts/sidemenu.html'
})


export class MyApp {
  rootPage:any = LoginPage;
  pages: any[] = [
    { title: 'Dashboard', component: HomePage },
    { title: 'My Team', component: TeamListPage },
    // { title: 'Notification', component: NotificationListPage },
    // { title: 'Settings', component: SettingsPage },
    {title: 'Logout', component: null}
  ]


  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page) {
    if(page.component) {
        this.nav.setRoot(page.component);
    } else {
        // Since the component is null, this is the logout option
        // ...

        // logout logic
        // ...

        // redirect to home
        this.nav.setRoot(HomePage);
    }
  }
}

