import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TakePictureComponent } from "../take-picture/take-picture.component"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private modalCtrl: ModalController) { }

  async showSendPhoto() {
    const modal = await this.modalCtrl.create({
      component: TakePictureComponent
    });
    return await modal.present();
  }
}