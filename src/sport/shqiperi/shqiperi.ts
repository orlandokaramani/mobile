import { Component } from '@angular/core';
import { SportpostPage } from '../sportpost/sportpost';
import { NavController, NavParams, IonicPage, LoadingController} from 'ionic-angular';
import { SportService } from '../../services/sport.wordpress.service';

@IonicPage()
@Component({
  selector: 'page-shqiperi',
  templateUrl: 'shqiperi.html'
})
export class ShqiperiPage {
  posts: Array<any> = new Array<any>();
  morePagesAvailable: boolean = true;
  categoryId: number;
  categoryTitle: string;
  rootNavCtrl: NavController;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public sportService: SportService,
    
  ) {this.rootNavCtrl = navParams.get('rootNavCtrl');}

  ionViewWillEnter() {
    
    this.morePagesAvailable = true;

    //if we are browsing a category
    this.categoryId = this.categoryId = 115;
    this.categoryTitle = this.navParams.get('title');

    if(!(this.posts.length > 0)){
      let loading = this.loadingCtrl.create();
      loading.present();

      this.sportService.getRecentPosts(this.categoryId)
      .subscribe(data => {
        for(let post of data){
          post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";
          this.posts.push(post);
          console.log(post)
        }
        loading.dismiss();
      });
    }
  }

  postTapped(event, post) {
		this.navCtrl.push(SportpostPage, {
		  item: post, event
		});
  }

  doInfinite(infiniteScroll) {
    let page = (Math.ceil(this.posts.length/10)) + 1;
    let loading = true;

    this.sportService.getRecentPosts(this.categoryId, page)
    .subscribe(data => {
      for(let post of data){
        if(!loading){
          infiniteScroll.complete();
        }
        post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";
        this.posts.push(post);
        loading = false;
      }
    })
  }
  showLoading() {
    this.loadingCtrl.create({
      duration: 1500,
      content: 'Loading ...'
    }).present();
  }

}