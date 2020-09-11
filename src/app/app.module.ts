import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { HomeComponent } from '../pages/home/home.component';
import { PhotosComponent } from '../pages/photos/photos.component';
import { TakePictureComponent } from '../pages/take-picture/take-picture.component';
import { SendPhotoComponent } from '../pages/send-photo/send-photo.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database"
import { AngularFireAuthGuardModule, AngularFireAuthGuard } from "@angular/fire/auth-guard"
import { AngularFireAuthModule } from "@angular/fire/auth"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const environment = {
  firebase: {

    apiKey: "AIzaSyDRFuPOoI0lneUz3VQvH4mcJjN8Ul5S25k",
    authDomain: "localize-f0001.firebaseapp.com",
    databaseURL: "https://localize-f0001.firebaseio.com",
    projectId: "localize-f0001",
    storageBucket: "localize-f0001.appspot.com",
    messagingSenderId: "870659270632",
    appId: "1:870659270632:web:e1b2f26d70861c9621e65d",
    measurementId: "G-9CJDYJM1NS"
  }
};

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, HomeComponent, PhotosComponent, TakePictureComponent, SendPhotoComponent, ProfileComponent],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireAuthGuardModule,
    FormsModule,
    AngularFireAuthModule,],
  providers: [
    AngularFireAuthGuard,
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
