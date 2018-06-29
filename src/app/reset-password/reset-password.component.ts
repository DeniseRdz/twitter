import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../authentications.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  inputEmail : string;

  constructor(public authenticationService : AuthenticationsService, public router : Router ) { }

  ngOnInit() {
  }

  resetPassword(){
    console.log(this.inputEmail);
    const promise = this.authenticationService.resetPassword(this.inputEmail);
    promise.then((data) =>{
      alert("SE ENVIO CORREO !");
      console.log(data);
      this.router.navigateByUrl("/login");
    }).catch((error)=>{
      alert("Valio Riel");
      console.log(error);
    });
  }
  

}
