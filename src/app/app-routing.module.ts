import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'chooseCurrencies',
    loadChildren: () => import('./Currencies/Currencies.module').then( m => m.CurrenciesModule)
  },

  {
    path: 'notifications',
    loadChildren: () => import('./Notification/Notification.module').then( m => m.NotificationModule)
  },

  {
    path: 'welcome',
    loadChildren: () => import('./Welcome/Welcome.module').then( m => m.WelcomeModule)
  },

  {
    path: 'transaction',
    loadChildren: () => import('./Transaction/Transaction.module').then( m => m.TransactionModule)
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
