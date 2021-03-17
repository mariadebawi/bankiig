import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss']
})
export class SignInComponent implements OnInit {

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
