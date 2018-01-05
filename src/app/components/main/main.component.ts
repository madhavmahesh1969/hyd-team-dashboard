import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  location = '' ;
  constructor(private  _router : Router) {      
    this.location = _router.url;
    console.log('this.location',this.location);
  }
  getCurrentLocation(location){
    //return this._router.url;
    //this.location = this._router.url;
    this.location = location;
    console.log('this.location',this.location);
  }
  ngOnInit() {
  }

}
