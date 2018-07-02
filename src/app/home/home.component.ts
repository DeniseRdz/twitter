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
  userTwets = [];
  textFieldTweet: string;
  dateString = '';
  userId: string;

  constructor(public usersService: UsersService, public twetsService: TwetsService) {

    const preview = this.usersService.getAllUsers();
    preview.valueChanges().subscribe((user) => {
        this.userAll = user;
    });

    const previewTwets = this.twetsService.getAllTwets();
    previewTwets.valueChanges().subscribe((twet: any) => {
      this.twetsAll = twet;
    });
    this.userId = localStorage.getItem('Suscribe');
   }
  ngOnInit() {
  }

  tweet() {
    this.twetsService.tweet(this.textFieldTweet);
  }

}
