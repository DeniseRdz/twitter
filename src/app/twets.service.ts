import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class TwetsService {

  //#region  const
   dataTableTweets = 'tweets';
   slash = '/';

   list = [];
   TweetsUser = [];
   dateForTweetId = new Date();


  //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) {   }

   getAllTwets() {
    return this.angularFireDatabase.list(this.dataTableTweets);
  }

  getTwetsByUserId(userId) {

    const preview =   this.angularFireDatabase.list(this.dataTableTweets);

    preview.valueChanges().subscribe((value) => {
        this.list = value;
    });

    this.list.filter((value) => {
        if (value.userId === userId) {
          this.TweetsUser.push(value);
        }
    });

     return  this.TweetsUser;

  }

  createTwet(Twet) {
    return this.angularFireDatabase.object(this.dataTableTweets + this.slash + this.dateForTweetId.getTime()).set(Twet);
      }

    }
