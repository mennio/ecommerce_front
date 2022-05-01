import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { PCAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PCBUREAUComponent } from './pc-bureau/pc-bureau.component';
import { PCPORTABLEComponent } from './pc-portable/pc-portable.component';
import { TelSmartphoneComponent } from './tel-smartphone/tel-smartphone.component';
import { TelFixeComponent } from './tel-fixe/tel-fixe.component';
import { TelAccessoiresComponent } from './tel-accessoires/tel-accessoires.component';
import { StockageDisquedurComponent } from './stockage-disquedur/stockage-disquedur.component';
import { StockageCleusbComponent } from './stockage-cleusb/stockage-cleusb.component';
import { StockageAccessoiresComponent } from './stockage-accessoires/stockage-accessoires.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "PcPortable", component: PCPORTABLEComponent},
  {path : "PcBureau", component: PCBUREAUComponent},
  {path : "PcAccessoires", component: PCAccessoiresComponent},
  {path : "Connexion", component: ConnexionComponent},
  {path : "TelSmartphone", component: TelSmartphoneComponent},
  {path : "TelFixe", component: TelFixeComponent},
  {path : "TelAccessoires", component: TelAccessoiresComponent},
  {path : "StockageDisquedur", component: StockageDisquedurComponent},
  {path : "StockageCleusb", component: StockageCleusbComponent},
  {path : "StockageAccessoires", component: StockageAccessoiresComponent},
  {path : "Panier", component: PanierComponent},




  /*{path : '',
   component : AppComponent,
   children : [
    {
      path : 'Connexion',
      component : ConnexionComponent
    }
   ]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
