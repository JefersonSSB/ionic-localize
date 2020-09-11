import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-send-photo',
  templateUrl: './send-photo.component.html',
  styleUrls: ['./send-photo.component.css']
})
export class SendPhotoComponent {
  public photo: string = '';
  public filter: string = 'original';
  public filters: string[] = [
    "original",
    "_1977",
    "aden",
    "brannan",
    "brooklyn",
    "clarendon",
    "earlybird",
    "gingham",
    "hudson",
    "inkwell",
    "kelvin",
    "lark",
    "lofi",
    "maven",
    "mayfair",
    "moon",
    "nashville",
    "perpetua",
    "reyes",
    "rise",
    "slumber",
    "stinson",
    "toaster",
    "valencia",
    "walden",
    "willow",
    "willow",
  ];
  constructor(private modalCtrl: ModalController, private navParams: NavParams,) {
    this.photo = this.navParams.get('photo');

  }


  dismiss() {
    this.modalCtrl.dismiss();
  }

  nameFilter(i): string {
    return this.filters[i];
  }
}
