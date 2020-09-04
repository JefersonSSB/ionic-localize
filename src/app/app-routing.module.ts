import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component'
import { SignupComponent } from '../pages/signup/signup.component'
import { PhotosComponent } from '../pages/photos/photos.component'
import { ProfileComponent } from '../pages/profile/profile.component'
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "photos", component: PhotosComponent },
  { path: "profile", component: ProfileComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
