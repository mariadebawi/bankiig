import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.scss']
})
export class SignUpComponent implements OnInit {
  passwordType = 'password';
  validations_form: FormGroup;
  constructor(private  router:  Router ,  private formBuilder: FormBuilder,) { }
  validation_messages = {
    'email': [
        { type: 'required', message: 'Email account is already in use . ' },
      ],
      
  }
  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }
  goBAck(){
    this.router.navigateByUrl('/home');
  }

  goVerify(){
    this.router.navigateByUrl('/verify');
  }



  ShowPassword() {
    if (this.passwordType === 'password') {
        this.passwordType = 'text';
    } else {
        this.passwordType = 'password';
    }
}
}
