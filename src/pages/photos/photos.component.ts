import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { LoadingController, ModalController } from '@ionic/angular';
import { ShowMapComponent } from "../show-map/show-map.component"

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  public photos: any[] = [];

  constructor(private db: AngularFireDatabase, private modalCtrl: ModalController, private loadingCtrl: LoadingController) {
    this.showPhotos();
  }

  async showPhotos() {
    const loader = await this.loadingCtrl.create({ message: "Carregando fotos..." });
    loader.present();

    this.db.list('/photos').valueChanges().subscribe(photos => {
      this.photos = photos.reverse();
      loader.dismiss();
    });
  }

  showMap(location) {
    this.modalCtrl.create({ component: ShowMapComponent, componentProps: { location: location } }).then(res =>
      res.present());
  }

}