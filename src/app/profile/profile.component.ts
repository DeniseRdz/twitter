import { Component, OnInit } from '@angular/core';
import { TwetsService } from '../twets.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userTweets;
  userId: string;
  userInfo;
  usersInfo;

  userTwetsById = [];

  constructor( public twetsService: TwetsService , public userService: UsersService) {
    this.userId = localStorage.getItem('Suscribe');
    this.getTweets();
    this.getUserInfo();
    this.getAllUsers();
   }
   getUserInfo() {
    // console.log(this.userId);
    const userInfo = this.userService.getUserByUserId(this.userId);
    userInfo.valueChanges().subscribe((result) => {
      this.userInfo = result;
     // console.log( this.userInfo);
       });
   }

  getTweets() {
    
     this.userTwetsById = this.twetsService.getTwetsByUserId(this.userId);

    console.log(this.userTwetsById);
  }

  getAllUsers()  {
    const usersInfo = this.userService.getAllUsers();
    usersInfo.valueChanges().subscribe((results) => {
      this.usersInfo = results;
    //  console.log(this.usersInfo);
    });
  }
ngOnInit() {
}
}

