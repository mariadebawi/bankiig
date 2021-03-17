import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
 
  validations_form: FormGroup;
  constructor(private  router:  Router ,  private formBuilder: FormBuilder,) { }
  validation_messages = {
    'verifNumber': [
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
  VerifyCode(){
    this.router.navigateByUrl('/auth/verifyCode');
  }
}
