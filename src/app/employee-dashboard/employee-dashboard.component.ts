import { Component, OnInit } from '@angular/core';
import { routerTransitionToRight } from '../animations/router.animations';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
  animations: [routerTransitionToRight()],
  host: {'[@routerTransitionToRight]': ''}
})
export class EmployeeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
