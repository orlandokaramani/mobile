import { Component } from '@angular/core';
import { BlogpostPage } from '../blogpost/blogpost';
import { NavController, NavParams, IonicPage, LoadingController} from 'ionic-angular';
import { BlogService } from '../../services/blog.wordpress.service';

@IonicPage()
@Component({
  selector: 'page-blogkreu',
  templateUrl: 'blogkreu.html'
})
export class BlogkreuPage {
  posts: Array<any> = new Array<any>();
  morePagesAvailable: boolean = true;
  categoryId: number;
  categoryTitle: string;
  rootNavCtrl: NavController;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public blogService: BlogService,
    
  ) {this.rootNavCtrl = navParams.get('rootNavCtrl');}

  ionViewWillEnter() {
    
    this.morePagesAvailable = true;

    //if we are browsing a category
    this.categoryId = this.categoryId = 15;
    this.categoryTitle = this.navParams.get('title');

    if(!(this.posts.length > 0)){
      let loading = this.loadingCtrl.create();
      loading.present();

      this.blogService.getRecentPosts(this.categoryId)
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
		this.navCtrl.push(BlogpostPage, {
		  item: post, event
		});
  }

  doInfinite(infiniteScroll) {
    let page = (Math.ceil(this.posts.length/10)) + 1;
    let loading = true;

    this.blogService.getRecentPosts(this.categoryId, page)
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
  goToCategoryPosts(categoryId, categoryTitle){
    this.navCtrl.push(BlogkreuPage, {
      id: categoryId,
      title: categoryTitle
    })
  }

}