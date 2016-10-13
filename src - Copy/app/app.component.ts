import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage2} from '../pages/home2/home2';

@Component({
  templateUrl: 'app.html',
})

export class MyApp {
  rootPage: any = HomePage2;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
