import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CurrenciesModule } from './Currencies/Currencies.module';
import { NotificationModule } from './Notification/Notification.module';
import { TransactionModule } from './Transaction/Transaction.module';
import { WelcomeModule } from './Welcome/Welcome.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    AuthModule,
    CurrenciesModule,
    NotificationModule,
    TransactionModule,
    WelcomeModule,
    IonicModule.forRoot(),
     AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
