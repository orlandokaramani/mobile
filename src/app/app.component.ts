import {Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  rootParams: any;

  menuItems: any[] = [
    
    {
      name: 'Kreu',
      page: 'IonicTabsPage',
      params: { type: 'titles-only' }
    }
    
  ];

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar) {
    this.rootPage = this.menuItems[0].page;
    this.rootParams = this.menuItems[0].params;
    platform.ready().then(() => {
      splashScreen.show();
      statusBar.backgroundColorByHexString('#3949AB');
      
    // OneSignal Code start:
    // Enable to debug issues:
    window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    window["plugins"].OneSignal
      .startInit("9d3f5c20-0ebb-4321-9e22-1cf74d2409ce", "MTNkMDI2MTctNjM1Yy00YWZkLWFjODYtMTdhNmE0MzZkNGVl")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
     });
  }
 
 openPage(page) {
    this.nav.setRoot(page.page, page.params);
  }

}
