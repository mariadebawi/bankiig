import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NotificationComponent } from './Notification.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'notificatons',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NotificationComponent
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
  declarations: [NotificationComponent]
})
export class NotificationModule { }
