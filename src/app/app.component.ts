import { Component } from '@angular/core';
//#region import Router - AuthenticationService
import { Router } from '@angular/router';
import { AuthenticationsService } from './authentications.service';
//#endregion


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  suscribeCheck;

  constructor(public router : Router, public autenticationService : AuthenticationsService){

    const promise = this.autenticationService.getStatus();

    promise.subscribe((suscribe)=>{
      this.suscribeCheck =suscribe;
        if(suscribe == null){

        //  this.router.navigateByUrl("/login");
         
        }
        // localStorage.setItem("Suscribe", suscribe.uid);
    });

  }

  logOut(){
    this.autenticationService.logOut();
    this.router.navigateByUrl("/login");
  }


}
