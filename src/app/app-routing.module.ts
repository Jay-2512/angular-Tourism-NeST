import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictPageComponent } from './pages/district-page/district-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'districts', component: DistrictPageComponent },
  { path: 'signup', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
