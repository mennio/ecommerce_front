import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {PCPORTABLEComponent} from './pc-portable/pc-portable.component';
import {PCBUREAUComponent} from './pc-bureau/pc-bureau.component';
import {PCAccessoiresComponent} from './pc-accessoires/pc-accessoires.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {PhonesModule} from './modules/phones/phones.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SecondnavbarComponent} from './secondnavbar/secondnavbar.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import {ReactiveFormsModule} from '@angular/forms';
import {TelSmartphoneComponent} from './tel-smartphone/tel-smartphone.component';
import {TelFixeComponent} from './tel-fixe/tel-fixe.component';
import {TelAccessoiresComponent} from './tel-accessoires/tel-accessoires.component';
import {StockageDisquedurComponent} from './stockage-disquedur/stockage-disquedur.component';
import {StockageCleusbComponent} from './stockage-cleusb/stockage-cleusb.component';
import {StockageAccessoiresComponent} from './stockage-accessoires/stockage-accessoires.component';
import {PanierComponent} from './panier/panier.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PCPORTABLEComponent,
    PCBUREAUComponent,
    PCAccessoiresComponent,
    ConnexionComponent,
    SecondnavbarComponent,
    TelSmartphoneComponent,
    TelFixeComponent,
    TelAccessoiresComponent,
    StockageDisquedurComponent,
    StockageCleusbComponent,
    StockageAccessoiresComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PhonesModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
