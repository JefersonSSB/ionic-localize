import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendPhotoComponent } from "../send-photo/send-photo.component";

@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.css']
})
export class TakePictureComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }

  async takePicture() {
    const modal = await this.modalCtrl.create({
      component: SendPhotoComponent
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
