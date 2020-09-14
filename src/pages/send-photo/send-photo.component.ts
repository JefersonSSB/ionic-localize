import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-send-photo',
  templateUrl: './send-photo.component.html',
  styleUrls: ['./send-photo.component.css']
})
export class SendPhotoComponent {
  public user: string = '';
  public form: FormGroup;
  public photos: AngularFireList<any>;
  public photo: string = '';
  public location: string = '';
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
  constructor(private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private db: AngularFireDatabase, fb: FormBuilder,
    private afAuth: AngularFireAuth,
    public router: Router,) {
    this.photo = this.navParams.get('photo');
    this.photos = db.list('/photos');

    afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user.email
      }
    });

    this.form = fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      message: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.required
      ])]
    });


  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        this.location = data.coords.latitude + ',' + data.coords.longitude;
      }, (err) => {
        let alert = this.alertCtrl.create({
          header: 'Ops, algo deu errado',
          subHeader: 'Não foi possível obter sua localização.',
          buttons: ['OK']
        }).then(res =>
          res.present());
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  nameFilter(i): string {
    return this.filters[i];
  }

  async submit() {
    const loader = await this.loadingCtrl.create({ message: "Enviando..." });
    loader.present();

    this.photos
      .push({
        user: this.user,
        image: this.photo,
        filter: this.filter,
        location: this.location,
        title: this.form.controls['title'].value,
        message: this.form.controls['message'].value,
        date: firebase.database.ServerValue.TIMESTAMP
      })
      .then(() => {
        loader.dismiss();
        this.alertCtrl.create({
          header: 'Sucesso !',
          buttons: ['OK']
        }).then(res =>
          res.present())
        this.dismiss();
      })
      .catch(() => {
        loader.dismiss();
        this.alertCtrl.create({
          header: 'Ops, algo deu errado',
          subHeader: 'Não foi possível enviar sua imagem.',
          buttons: ['OK']
        }).then(res =>
          res.present())

      });
  }
}

