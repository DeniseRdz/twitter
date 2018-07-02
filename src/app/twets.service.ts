import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class TwetsService {

  //#region  const
   dataTableTweets = 'tweets';
   slash = '/';

   list : any;
   TweetsUser = [];
   dateForTweetId = new Date();


  //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) {   }

   getAllTwets() {
    return this.angularFireDatabase.list(this.dataTableTweets);
  }

  getTwetsByUserId(userId) {




     this.angularFireDatabase.database.ref(this.dataTableTweets)
     .orderByChild("userId").equalTo(userId).on("child_added", (user) =>{
       this.TweetsUser.push(user.val());
     });
 
     return this.TweetsUser;

  }

  createTwet(Twet) {
    return this.angularFireDatabase.object(this.dataTableTweets + this.slash + this.dateForTweetId.getTime()).set(Twet);
      }

    }
