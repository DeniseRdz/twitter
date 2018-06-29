import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../authentications.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  emailUser: string ;
  passUser: string ;



  constructor(public router: Router, public authenticationService: AuthenticationsService) { }

  ngOnInit() {
  }

  login() {

    const promise = this.authenticationService.Login(this.emailUser, this.passUser);
    promise.then((data) => {

      alert('Se inicio sección');
      console.log(data);
      this.router.navigateByUrl('/home');

    }).catch((error) => {

      alert('Valio Riel');
      console.log(error);

    });

    this.emailUser = '';
    this.passUser = '';

  }

}
