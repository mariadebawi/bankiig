import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  validations_form: FormGroup;
  constructor(private  router:  Router ,  private formBuilder: FormBuilder,) { }
  validation_messages = {
    'email': [
        { type: 'required', message: 'Email account is already in use . ' },
      ],
      
  }
  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      verifNumber: new FormControl('', Validators.required),
    
    });
  }

  goBAck(){
    this.router.navigateByUrl('/home');
  }
  creatNewPass(){
    this.router.navigateByUrl('/auth/createPassword');
  }
}
