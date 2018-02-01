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
      name: 'Full Height - Title only',
      page: 'HomePage',
      params: { type: 'titles-only' }
    },
    {
      name: 'Full height - Icons only',
      page: 'HomePage',
      params: { type: 'icons-only' }
    },
    {
      name: 'Ionic tabs',
      page: 'IonicTabsPage'
    }
  ];

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar) {
    this.rootPage = this.menuItems[0].page;
    this.rootParams = this.menuItems[0].params;
    platform.ready().then(() => {
      splashScreen.show();
      statusBar.backgroundColorByHexString('#3949AB')
    });
  }

  openPage(page) {
    this.nav.setRoot(page.page, page.params);
  }

}
