import { Component, OnInit } from '@angular/core';

import { AuthenticationsService } from '../authentications.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  name: string;
  emailUser :string ;
  lastName: string;
  passUser :string ;
  repeatPassUser :string;

  constructor(public router: Router, public authenticationService: AuthenticationsService, public userFireBaseService :UsersService) { }

  ngOnInit() {
  }

  register (){

    if(this.passUser === this.repeatPassUser){

      const promise = this.authenticationService.emailRegistration(this.emailUser,this.passUser);
      promise.then((data) =>{
        alert("Registrado con éxito");
       
        var newObject = 
        {
          name:this.name,email:this.emailUser,lastName:this.lastName, userId:data.user.uid
         };

        this.addUser(newObject);
        //this.router.navigateByUrl("/home");
    
      }).catch((error)=>{
        alert("Valio Riel");
        console.log(error);
      });

    }
    else
    {
      alert("La contraseña no coincide");
    }

 
}

addUser(user){


  const promise = this.userFireBaseService.createUser(user);
  promise.then(() =>{
    alert("Usuario Creado Exito!");
  }).catch( (error) =>{
    alert("hubo pedo!");
    console.log(error);
  });


  this.name="";
  this.repeatPassUser="";
  this.emailUser="";
  this.passUser="";
  this.lastName="";

  this.router.navigateByUrl("/login");
}


}
