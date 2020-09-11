import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private loadingCtrl: LoadingController, private afAuth: AngularFireAuth, private alertCtrl: AlertController) {

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
    const loading = await this.loadingCtrl.create({
      message: 'Cadastrando...'
    });
    loading.present();

    this.afAuth.createUserWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
      .then(() => {
        loading.dismiss();
        this.alertCtrl.create({
          header: 'Bem vindo!',
          subHeader: 'Seu cadastro foi criado com sucesso e você já tem acesso ao nosso App.',
          buttons: ['OK']
        }).then((res) => {
          res.present();
        });
        this.router.navigateByUrl("");
      })
      .catch(() => {
        loading.dismiss();
        this.alertCtrl.create({
          header: 'Ops, algo deu errado!',
          subHeader: 'Não foi possível realizar seu cadastro.',
          buttons: ['OK']
        }).then((res) => {
          res.present();
        });
      });
  }
}
