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


  ionViewDidEnter() {
    var video = <any>document.getElementById('video');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.srcObject = stream;
        video.play();
      });
    }
  }

  takePicture() {
    var video = <any>document.getElementById('video');
    var canvas = <any>document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, 320, 240);

    video.classList.add('animated');
    video.classList.add('flash');



    setTimeout(() => {
      this.modalCtrl.dismiss();

      this.modalCtrl.create({
        component: SendPhotoComponent
        , componentProps: { photo: canvas.toDataURL() }
      }).then((res) => {
        res.present();

      }
      );
    }, 800);


  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
