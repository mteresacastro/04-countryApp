import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/pages/contactPage/contactPage.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
  },
  {
    path:'about',
    component: AboutPageComponent,
  },
  {
    path:'contact',
    component: ContactPageComponent,
  },
  {
    path:'**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
