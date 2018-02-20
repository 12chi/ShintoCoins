import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinesComponent } from './mines/mines.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mines', component: MinesComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'ledger', component: LedgerComponent },
  { path: 'transaction/:id', component: TransactionComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
