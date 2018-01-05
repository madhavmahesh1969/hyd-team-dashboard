import { Component, OnInit } from '@angular/core';
import { routerTransitionToTop } from '../../animations/router.animations';
@Component({
  selector: 'app-project-growth',
  templateUrl: './project-growth.component.html',
  styleUrls: ['./project-growth.component.scss'],
  animations: [routerTransitionToTop()],
  host: {'[@routerTransitionToTop]': ''}
})
export class ProjectGrowthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
