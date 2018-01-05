import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input()
  tile_title;
  @Input()
  tile_count;
  @Input()
  tile_image;
  @Input()
  tile_id;
  @Input()
  tile_link;

  constructor() { }

  ngOnInit() {
  }

}
