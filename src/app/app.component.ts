import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
//#region import Router - AuthenticationService
import { Router } from '@angular/router';
import { AuthenticationsService } from './authentications.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
//#endregion


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userId:string;
  suscribeCheck;
  closeResult: string;
  tweetText: string;

  constructor( private modalService: NgbModal, public router: Router, public autenticationService: AuthenticationsService) {
    // this.userId=localStorage.getItem('Subscribe');
    // HomeComponent.tweet(this.tweetText);
    const promise = this.autenticationService.getStatus();

    promise.subscribe((suscribe) => {
      this.suscribeCheck = suscribe;
        if (suscribe == null) {
          this.router.navigateByUrl('/login');
        }
         localStorage.setItem('Suscribe' , suscribe.uid);
    });

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  logOut() {
    this.autenticationService.logOut();
    this.router.navigateByUrl('/login');
  }


}
