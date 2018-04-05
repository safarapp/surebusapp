import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {ServicesComponent} from "./services/services.component";
import {QuoteComponent} from "./quote/quote.component";
import {CustomerInfoComponent} from "./customerinfo/customerinfo.component";
import {ConfirmationComponent} from "./confirmation/confirmation.component";
import {AboutusComponent} from "./aboutus/aboutus.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'searchresults', component: QuoteComponent },
  { path: 'customer', component: CustomerInfoComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'aboutus', component: AboutusComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {

}
