import { Component } from '@angular/core';
import { NavParams, NavController, LoadingController, AlertController } from 'ionic-angular';
import { FutbollPage } from '../futboll/futboll';
import { SportService } from '../../services/sport.wordpress.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'page-sportpost',
  templateUrl: 'sportpost.html'
})

export class SportpostPage {
     

  post: any;
  user: string;
  comments: Array<any> = new Array<any>();
  categories: Array<any> = new Array<any>();
  morePagesAvailable: boolean = true;
  
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public sportService: SportService,
    public authenticationService: AuthenticationService,
    
  ) {}
  
  ionViewWillEnter(){
    this.morePagesAvailable = true;
    let loading = this.loadingCtrl.create();

    loading.present();

    this.post = this.navParams.get('item');
    
    
    Observable.forkJoin(
      this.getAuthorData(),
      this.getCategories(),
      this.getComments())
      .subscribe(data => {
        this.user = data[0].name;
        this.categories = data[1];
        this.comments = data[2];
        loading.dismiss();
      });
  }

  getAuthorData(){
    return this.sportService.getAuthor(this.post.author);
  }
  getArticle(){
    return this.sportService.getArticle(this.post)
  }
   getCategories(){
    return this.sportService.getPostCategories(this.post);
  }

  getComments(){
    return this.sportService.getComments(this.post.id);
  }

  loadMoreComments(infiniteScroll) {
    let page = (this.comments.length/10) + 1;
    this.sportService.getComments(this.post.id, page)
    .subscribe(data => {
      for(let item of data){
        this.comments.push(item);
      }
      infiniteScroll.complete();
    }, err => {
      console.log(err);
      this.morePagesAvailable = false;
    })
  }

  goToCategoryPosts(categoryId, categoryTitle){
    this.navCtrl.push(FutbollPage, {
      id: categoryId,
      title: categoryTitle
    })
  }

  
}
