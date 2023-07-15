import { Component, OnInit } from '@angular/core';
//import { environment as env } from '../../environments/environment';

@Component({
  selector: 'rev1211-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // version = env.versions.app;
  version = "testversion";

  constructor() {
    console.log('constructor of Footer Component');
  }

  ngOnInit(): void {
    console.log('OnInit of Footer Component');
  }

}
