import { TwetsService } from './../twets.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  allTweets: any;
  usersTweets: any;

  userTwets = [];

  constructor(public usersService: UsersService,public twetsService: TwetsService) {
    this.getAll();

   }

  ngOnInit() {
  } 


  

  getAll() {
    const stream = this.twetsService.getAllTwets();
    stream.valueChanges().subscribe( (result) => {
      this.allTweets = result;
    });

    //this.forPreview();
  }


  forPreview(){

    this.allTweets.forEach((item)=>{
          const streamUser = this.usersService.getUserByUserId(item.userId);
          streamUser.valueChanges().subscribe((result) => {
            this.userTwets.push(result);
          });
    });

    console.log(this.allTweets);
    console.log(this.userTwets);
}
}
