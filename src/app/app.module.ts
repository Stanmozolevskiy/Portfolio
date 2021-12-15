import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { GetintouchComponent } from './getintouch/getintouch.component';


const config = {
  apiKey: "AIzaSyDYfIolSWky_mSTDqu5ukJ5pApqksK_Ri0",
  authDomain: "email-handler-e3a22.firebaseapp.com",
  projectId: "email-handler-e3a22",
  storageBucket: "email-handler-e3a22.appspot.com",
  messagingSenderId: "540805341175",
  appId: "1:540805341175:web:d929602239ff84a10858f2",
  measurementId: "G-MP9LNCRW5F"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    GetintouchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule ,
    AngularFireModule.initializeApp(config),
    AngularFireFunctionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
