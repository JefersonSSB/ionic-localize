import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.component.html',
  styleUrls: ['./show-map.component.css']
})
export class ShowMapComponent {

  public location: string = '';

  constructor(private navParams: NavParams, private modalCtrl: ModalController) {
    this.location = this.navParams.get('location');

  }

  ionViewDidEnter() {
    var html = '<iframe style="height: 90vh;" width="100%" height="99%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC1NT3JztZ1OnEmUhizuZaVcyVKfWnqEk0&q=' + this.location + '" allowfullscreen></iframe>';
    document.getElementById('map').innerHTML = html;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
