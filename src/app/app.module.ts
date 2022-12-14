import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { MessagesComponent } from './auth/messages/messages.component';
import { ListaMensajesComponent } from './listamensajes/listamensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ListaMensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }