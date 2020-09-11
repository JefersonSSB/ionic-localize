import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public router: Router, private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,) {
  }


  ngOnInit(): void {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigateByUrl("home");
      }
    });

    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }
  async submit() {
    const loader = await this.loadingCtrl.create({ message: "Autenticando..." });
    loader.present();


    this.afAuth.signInWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
      .then(() => {
        loader.dismiss();
        this.router.navigateByUrl("home");
      })
      .catch(() => {
        loader.dismiss();
        this.alertCtrl.create({
          header: 'Autenticação Inválida',
          subHeader: 'Usuário ou senha incorretos.',
          buttons: ['OK']
        }).then((res) => {
          res.present();
        });
      });
  }
}
