import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrenciesComponent } from './Currencies.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'chooseCurrencies',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CurrenciesComponent
  },



]

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    IonicModule
  ],
  declarations: [CurrenciesComponent]
})
export class CurrenciesModule { }
