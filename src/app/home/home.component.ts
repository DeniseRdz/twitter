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
  tweet(tweetString?: string) {
    const tweetObj = {
      date: '',
      hour: '',
      tweet: '',
      userId: '',
      userName: '',
    };
    const date = new Date();
    this.dateString = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    // LLENADO OBJETO
    tweetObj.date = this.dateString;
    tweetObj.hour = '' + date.getHours() + ':' + date.getMinutes();
    if (tweetString === undefined) {
      tweetObj.tweet = this.textFieldTweet;
    } else {
      tweetObj.tweet = tweetString;
    }

    const streamUser = this.usersService.getUserByUserId(this.userId);
    streamUser.valueChanges().subscribe((result) => {

      tweetObj.userId = this.userId;
      const obj: any = result;
      tweetObj.userName = obj.name;
      this.twetsService.createTwet(tweetObj);
    });
  }

}
