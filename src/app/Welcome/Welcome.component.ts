import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Welcome',
  templateUrl: './Welcome.component.html',
  styleUrls: ['./Welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
