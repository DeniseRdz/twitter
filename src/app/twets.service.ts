import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class TwetsService {

  //#region  const
   dataTableTweets = "tweets";
   slash = "/"


  //#endregion

  constructor(public angularFireDatabase : AngularFireDatabase) {   }

   getAllTwets(){
    return this.angularFireDatabase.list(this.dataTableTweets);
  }

  getTwetsByUserId(){
     
    return  this.angularFireDatabase.list(this.dataTableTweets);

 
  }


}
