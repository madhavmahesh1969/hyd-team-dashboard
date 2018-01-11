import { Component, OnInit, ChangeDetectorRef,
  ChangeDetectionStrategy } from '@angular/core';
import { routerTransitionToRight } from '../../animations/router.animations';

@Component({
  selector: 'app-employee-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
  animations: [routerTransitionToRight()],
  host: {'[@routerTransitionToRight]': ''}
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef) { }
ngOnInit() {
    this.graph = this.d3Service.getForceDirectedGraph(...);
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

}
