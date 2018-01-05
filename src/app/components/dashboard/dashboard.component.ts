import { Component, OnInit } from '@angular/core';
import { TilesDataService } from '../../service/tiles-data.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { routerTransitionToBottom } from '../../animations/router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TilesDataService],
    animations: [routerTransitionToBottom()],
  host: {'[@routerTransitionToBottom]': ''}
})
export class DashboardComponent implements OnInit {
  tileData: any;
  constructor(private tilesDataService: TilesDataService, private router:Router) { }
  

  ngOnInit() {
    this.tilesDataService.getTileData().then(tileData => this.tileData = tileData);
  }
  navigateToMainPage(){
    this.router.navigate(['main']);
  }
}
