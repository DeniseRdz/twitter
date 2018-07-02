import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class TwetsService {

  //#region  const
<<<<<<< HEAD
   dataTableTweets = "tweets";
   slash = "/"
   
   list =[];
   TweetsUser= [];
=======
   dataTableTweets = 'tweets';
   slash = '/';


>>>>>>> 4999de1bf6a7d68dc279a225b316e668df412944
  //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) {   }

   getAllTwets() {
    return this.angularFireDatabase.list(this.dataTableTweets);
  }

<<<<<<< HEAD
  getTwetsByUserId(userId){

    const preview =   this.angularFireDatabase.list(this.dataTableTweets); 

    preview.valueChanges().subscribe((value)=>{
        this.list = value;
    });

    this.list.filter((value)=>{
        if(value.userId == userId){
          this.TweetsUser.push(value);
        }
    });

     return  this.TweetsUser;

  }

  createTwet(Twet){
    return this.angularFireDatabase.object(this.dataTableTweets+this.slash+Twet.tweetId).set(Twet);
=======
  getTwetsByUserId(usrID) {
    return this.angularFireDatabase.list(this.dataTableTweets);
>>>>>>> 4999de1bf6a7d68dc279a225b316e668df412944
  }


}
