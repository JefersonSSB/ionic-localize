import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TakePictureComponent } from "../take-picture/take-picture.component"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private afAuth: AngularFireAuth, public router: Router) {
  }
  ngOnInit(): void {
  }

  async showSendPhoto() {
    const modal = await this.modalCtrl.create({
      component: TakePictureComponent
    });
    return await modal.present();
  }
}