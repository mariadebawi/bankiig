
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './Welcome.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    component: WelcomeComponent
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
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }


