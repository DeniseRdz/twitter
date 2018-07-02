import { TwetsService } from './../twets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  allTweets: any;
  usersTweets: any;
  array = [1, 2];

  constructor(public twetsService: TwetsService) {
    this.getAll();
   }

  ngOnInit() {
  }

  getAll() {
    const stream = this.twetsService.getAllTwets();
    stream.valueChanges().subscribe( (result) => {
      this.allTweets = result;
    });
  }
}
