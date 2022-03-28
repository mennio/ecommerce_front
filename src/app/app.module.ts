import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PCPORTABLEComponent } from './pc-portable/pc-portable.component';
import { PCBUREAUComponent } from './pc-bureau/pc-bureau.component';
import { PCAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PhonesModule } from './modules/phones/phones.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondnavbarComponent } from './secondnavbar/secondnavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PCPORTABLEComponent,
    PCBUREAUComponent,
    PCAccessoiresComponent,
    ConnexionComponent,
    SecondnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
