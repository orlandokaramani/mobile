import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as Config from '../sport.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class SportService {
  constructor(public http: Http){}

  getRecentPosts(categoryId:number, page:number = 1){
    //if we want to query posts by category
    let category_url = categoryId? ("&categories=" + categoryId): "";

    return this.http.get(
      Config.SPORT_REST_API_URL
      + 'posts?page=' + page
      + category_url)
    .map(res => res.json());
  }

  getComments(postId:number, page:number = 1){
    return this.http.get(
      Config.SPORT_REST_API_URL
      + "comments?post=" + postId
      + '&page=' + page)
    .map(res => res.json());
  }

  getAuthor(author){
    return this.http.get(Config.SPORT_REST_API_URL + "users/" + author)
    .map(res => res.json());
  }

  getArticle(slug) {
		return this.http.get(Config.SPORT_REST_API_URL + 'posts?filter[name]=' + slug + '&_embed');
	}
  
  getPostCategories(post){
    let observableBatch = [];

    post.categories.forEach(category => {
      observableBatch.push(this.getCategory(category));
    });

    return Observable.forkJoin(observableBatch);
  }

  getCategory(category){
    return this.http.get(Config.SPORT_REST_API_URL + "categories/" + category)
    .map(res => res.json());
  }

  createComment(postId, user, comment){
    let header: Headers = new Headers();
    header.append('Authorization', 'Bearer ' + user.token);

    return this.http.post(Config.SPORT_REST_API_URL + "comments?token=" + user.token, {
      author_name: user.displayname,
      author_email: user.email,
      post: postId,
      content: comment
    },{ headers: header })
    .map(res => res.json());
  }
}