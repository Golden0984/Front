import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MembersComponent } from './components/members/members.component';
import { InfoContactComponent } from './components/info-contact/info-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembersComponent,
    InfoContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
