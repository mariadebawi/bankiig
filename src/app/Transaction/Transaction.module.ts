 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionComponent } from './Transaction.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'transaction',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TransactionComponent
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
  declarations: [TransactionComponent]
})
export class TransactionModule { }

