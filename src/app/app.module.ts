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


@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, HomeComponent, PhotosComponent, TakePictureComponent, SendPhotoComponent, ProfileComponent],
  entryComponents: [LoginComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
