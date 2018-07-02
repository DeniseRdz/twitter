import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { TwetsService } from '../twets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userAll = [];
  twetsAll = [];
  textFieldTweet: string;
  dateString = '';
  userId: string;

  tweetObj = {
    date: '',
    hour: '',
    tweet: '',
    userId: '',
    userName: '',
  };

  constructor(public usersService: UsersService, public twetsService: TwetsService) {

    const preview = this.usersService.getAllUsers();
    preview.valueChanges().subscribe((user) => {
        this.userAll = user;
    });

    const previewTwets = this.twetsService.getAllTwets();
    previewTwets.valueChanges().subscribe((twet) => {
        this.twetsAll = twet;
    });

    this.userId = localStorage.getItem('Suscribe');
   }

  ngOnInit() {
  }
  tweet() { // "06/29/2018"
    const date = new Date();
    this.dateString = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    // LLENADO OBJETO
    this.tweetObj.date = this.dateString;
    this.tweetObj.hour = '' + date.getHours() + ':' + date.getMinutes();
    this.tweetObj.tweet = this.textFieldTweet;
    this.tweetObj.userId = this.userId;
    const streamUser = this.usersService.getUserByUserId(this.userId);
    streamUser.valueChanges().subscribe((result) => {
      const obj: any = result;
      this.tweetObj.userName = obj.name;
      this.twetsService.createTwet(this.tweetObj);
    });
  }

}
