import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SuperTabsController} from "ionic2-super-tabs";
import {SuperTabs} from "ionic2-super-tabs/";

@IonicPage({
  segment: 'gossip/:type'
})
@Component({
  selector: 'page-gossip',
  templateUrl: 'gossip.html'
})
export class GossipPage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  page1: any = 'ShowbizPage';
  page2: any = 'HistoriPage';
  page3: any = 'KeshillaPage';
  page4: any = 'ModePage';
  page5: any = 'MakeupPage';
  page6: any = 'YoudoitPage';
  page7: any = 'Plus18Page';
  
  

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
