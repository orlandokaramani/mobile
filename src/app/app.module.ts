import { SportpostPage } from './../sport/sportpost/sportpost';
import { BlogpostPage } from './../blog/blogpost/blogpost';
import { GossippostPage } from './../gossip/gossippost/gossippost';
import { PostPage } from './../alpenews/post/post';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { WordpressService } from '../services/wordpress.service';
import { BlogService } from '../services/blog.wordpress.service';
import { GossipService } from './../services/gossip.wordpress.service';
import { SportService } from './../services/sport.wordpress.service';
import { AuthenticationService } from '../services/authentication.service';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    PostPage,
    SportpostPage,
    BlogpostPage,
    GossippostPage,
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    SportpostPage,
    BlogpostPage,
    GossippostPage,

  ],
  providers: [
    SplashScreen,
    StatusBar,
    WordpressService,
    SportService,
    BlogService,
    GossipService,
    NativeStorage,
    AuthenticationService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
