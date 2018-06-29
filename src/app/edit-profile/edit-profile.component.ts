import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {

  userId : string;
  StatusAll = [];
  dataUser = {};
  userNick : string;
  userSubNick : string;
  userEmail : string;
  userStatus : string;
  imageSrc:string;
  UserName:string;

  constructor(public userService : UsersService) {

    this.userId=localStorage.getItem("Suscribe");

    const preview = this.userService.getUserByUserId(this.userId);

    preview.valueChanges().subscribe((result :any)=>{
      this.userNick = result.name;
      this.userSubNick = result.lastName;
      this.userEmail = result.email;
      this.imageSrc= result.avatar;
      this.UserName= result.username;
    });

   }

  ngOnInit() {
  }

  updateUser()
  {
    var el : any  = document.getElementById('img-upload');

      var objectUser = {
        avatar: el.src  , name: this.userNick, lastName: this.userSubNick, userId :  this.userId, username:  this.UserName
      };

      const preview = this.userService.updateUser(objectUser);
      preview.then(() =>{
        alert("Usuario Actualizado con  Exito!");
      }).catch( (error) =>{
        alert("hubo pedo!");
        console.log(error);
      });


  }

}
