import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Currencies',
  templateUrl: './Currencies.component.html',
  styleUrls: ['./Currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  constructor(private  router:  Router) { }

  ngOnInit() {
  }


  goBAck(){
    this.router.navigateByUrl('/home');
  }

  goforgot(){
    this.router.navigateByUrl('/auth/forgot');

  }

}
