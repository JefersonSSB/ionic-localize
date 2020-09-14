import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component'
import { SignupComponent } from '../pages/signup/signup.component'
import { PhotosComponent } from '../pages/photos/photos.component'
import { ProfileComponent } from '../pages/profile/profile.component'
import { HomeComponent } from '../pages/home/home.component'
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },

  {
    path: 'home', component: HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }, children: [
      { path: '', redirectTo: 'photos', pathMatch: 'full' },
      { path: "photos", component: PhotosComponent, pathMatch: 'full' },
      { path: "profile", component: ProfileComponent, pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
