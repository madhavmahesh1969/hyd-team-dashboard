import { Component, OnInit } from '@angular/core';
import { TilesDataService } from '../../service/tiles-data.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TilesDataService]
})
export class DashboardComponent implements OnInit {
  tileData: any;
  constructor(private tilesDataService: TilesDataService) { }

  ngOnInit() {
    this.tilesDataService.getTileData().then(tileData => this.tileData = tileData);
  }

}
