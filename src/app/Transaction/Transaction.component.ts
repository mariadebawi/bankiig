import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Transaction',
  templateUrl: './Transaction.component.html',
  styleUrls: ['./Transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private  router:  Router) { }

  ngOnInit() {
  }


  goBAck(){
    this.router.navigateByUrl('/home');
  }

 
}
