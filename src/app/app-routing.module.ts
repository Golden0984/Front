import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsModule } from './views/about-us/about-us.module';
import { ContactModule } from './views/contact/contact.module';
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { RegisterModule } from './views/register/register.module';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./views/home/home.module').then(m => HomeModule)
  },
  {
    path:"about-us",
    loadChildren: () => import('./views/about-us/about-us.module').then(m => AboutUsModule)
  },
  {
    path:"contact",
    loadChildren: () => import('./views/contact/contact.module').then(m => ContactModule)
  },
  {
    path:"login",
    loadChildren: () => import('./views/login/login.module').then(m => LoginModule)
  },
  {
    path:"register",
    loadChildren: () => import('./views/register/register.module').then(m => RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
