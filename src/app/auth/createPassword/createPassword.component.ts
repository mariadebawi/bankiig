import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createPassword',
  templateUrl: './createPassword.component.html',
  styleUrls: ['./createPassword.component.scss']
})
export class CreatePasswordComponent implements OnInit {

  passwordType = 'password';

  constructor(private  router:  Router) { }

  ngOnInit() {
  }


  ShowPassword() {
    if (this.passwordType === 'password') {
        this.passwordType = 'text';
    } else {
        this.passwordType = 'password';
    }
}
  goBAck(){
    this.router.navigateByUrl('/home');
  }

 

}
