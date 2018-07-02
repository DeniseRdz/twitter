import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class TwetsService {

  //#region  const
   dataTableTweets = 'tweets';
   slash = '/';

   list: any;
   TweetsUser = [];
   dateForTweetId = new Date();
  userId: string;

  //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase, public usersService: UsersService) {
    this.userId = localStorage.getItem('Suscribe');
    }

   getAllTwets() {
    return this.angularFireDatabase.list(this.dataTableTweets);
  }

  getTwetsByUserId(userId) {




     this.angularFireDatabase.database.ref(this.dataTableTweets)
     .orderByChild('userId').equalTo(userId).on('child_added', (user) => {
       this.TweetsUser.push(user.val());
     });

     return this.TweetsUser;

  }

  createTwet(Twet) {
    return this.angularFireDatabase.object(this.dataTableTweets + this.slash + this.dateForTweetId.getTime()).set(Twet);
      }



      tweet(tweetString: string) {
        let dateString = '';
    const tweetObj = {
      date: '',
      hour: '',
      tweet: '',
      userId: '',
      userName: '',
    };
    const date = new Date();
    dateString = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    // LLENADO OBJETO
    tweetObj.date = dateString;
    tweetObj.hour = '' + date.getHours() + ':' + date.getMinutes();
    tweetObj.tweet = tweetString;


    const streamUser = this.usersService.getUserByUserId(this.userId);
    streamUser.valueChanges().subscribe((result) => {

      tweetObj.userId = this.userId;
      const obj: any = result;
      tweetObj.userName = obj.name;
      this.createTwet(tweetObj);
    });
  }

    }
