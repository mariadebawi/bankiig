import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';

import { SignUpComponent } from './SignUp/SignUp.component';
import { SignInComponent } from './signIn/signIn.component';
import { VerifyComponent } from './verify/verify.component';
import { ForgotComponent } from './forgot/forgot.component';
import { VerifyCodeComponent } from './verifyCode/verifyCode.component';
import { CreatePasswordComponent } from './createPassword/createPassword.component';
 

  const routes: Routes = [
      {
        path: 'auth/SignIn',
        redirectTo: 'SignIn',
        pathMatch: 'full'
      },
      {
        path: 'SignIn',
        component: SignInComponent
      },

      {
        path: 'SignUp',
        component: SignUpComponent
      },

      {
        path: 'verify',
        component: VerifyComponent
      },

      {
        path: 'forgot',
        component: ForgotComponent
      }
      ,

      {
        path: 'verifyCode',
        component: VerifyCodeComponent
      }

      ,

      {
        path: 'createPassword',
        component: CreatePasswordComponent
      }

      ,





    ]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent,
    VerifyComponent,
    ForgotComponent,
    VerifyCodeComponent,
    CreatePasswordComponent
  ]
})
export class AuthModule { }
