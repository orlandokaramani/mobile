import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SuperTabsController} from "ionic2-super-tabs";
import {SuperTabs} from "ionic2-super-tabs/";

@IonicPage({
  segment: 'sport/:type'
})
@Component({
  selector: 'page-sport',
  templateUrl: 'sport.html'
})
export class SportPage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  page1: any = 'FutbollPage';
  page2: any = 'ShqiperiPage';
  page3: any = 'UefaPage';
  page4: any = 'AktualitetPage';
  page5: any = 'PolitikePage';
  page6: any = 'PolitikePage';
  page7: any = 'PolitikePage';
  page8: any = 'PolitikePage';
  

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
