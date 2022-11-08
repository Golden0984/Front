import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MembersComponent } from './components/members/members.component';
import { InfoContactComponent } from './components/info-contact/info-contact.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ServicesComponent } from './views/services/services.component';
// importacion para modulo reactivo login importacion formsmodule para ng model del formulario de registro
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembersComponent,
    InfoContactComponent,
    SliderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
