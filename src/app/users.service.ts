import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

    //#region  const
    dataTableUsers = "users";
    slash = "/"
   //#endregion

  constructor(public angularFireDatabase : AngularFireDatabase) { }

  getAllUsers(){
    return this.angularFireDatabase.list(this.dataTableUsers);
  }
  
  getUserByUserId(userId){
    return this.angularFireDatabase.object(this.dataTableUsers + this.slash + userId);
    
  }

}
