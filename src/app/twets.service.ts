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

<<<<<<< HEAD
  getTwetsByUserId(usrID) {
    return this.angularFireDatabase.list(this.dataTableTweets);
=======
  getTwetsByUserId(){
     
    return  this.angularFireDatabase.list(this.dataTableTweets);

 
>>>>>>> 2817c5382c548801f88416cffd7e2b116b46401f
  }


}
