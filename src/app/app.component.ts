import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDnIy3hnz0ATKI45ks4COlXJR5k1czg4A8',
      authDomain: 'recipe-book-ba3e8.firebaseapp.com',
    });
  }
}
