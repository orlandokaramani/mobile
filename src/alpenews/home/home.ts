import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SuperTabsController} from "ionic2-super-tabs";
import {SuperTabs} from "ionic2-super-tabs/";

@IonicPage({
  segment: 'home/:type'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  page1: any = 'KreuPage';
  page2: any = 'PolitikePage';
  page3: any = 'OpedPage';
  page4: any = 'AktualitetPage';
  page5: any = 'EkonomiPage';
  page6: any = 'KulturePage';
  page7: any = 'JetePage';
  

  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Full Height';

  constructor(public navCtrl: NavController, public navParams: NavParams, public superTabsCtrl: SuperTabsController) {
    const type = navParams.get('type');
    switch (type) {
      case 'icons-only':
        this.showTitles = false;
        this.pageTitle += ' - Icons only';
        break;

      case 'titles-only':
        this.showIcons = false;
        this.pageTitle += ' - Titles only';
        break;
    }
  }

  ngAfterViewInit() {
    //this.superTabsCtrl.increaseBadge('page1', 10);
     //this.superTabsCtrl.enableTabSwipe('page3', true);
     //this.superTabsCtrl.enableTabsSwipe(true);

    // Test issue #122
    // setTimeout(() => {
    //   this.superTabs.slideTo(4);
    // }, 2000);
  }

  onTabSelect(tab: { index: number; id: string; }) {
    console.log(`Selected tab: `, tab);
  }

}
