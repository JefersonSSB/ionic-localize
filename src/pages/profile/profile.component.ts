import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  public user: string = '';

  constructor(public router: Router, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user.email
      }
    });
  }


  submit() {
    this.afAuth.signOut().then(() => {
      this.router.navigateByUrl("");
    });
  }
}

