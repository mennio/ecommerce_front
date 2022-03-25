import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { PCAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PCBUREAUComponent } from './pc-bureau/pc-bureau.component';
import { PCPORTABLEComponent } from './pc-portable/pc-portable.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "PcPortable", component: PCPORTABLEComponent},
  {path : "PcBureau", component: PCBUREAUComponent},
  {path : "PcAccessoires", component: PCAccessoiresComponent},
  {path : "Connexion", component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
