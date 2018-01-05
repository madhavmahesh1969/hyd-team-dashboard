import { Component } from '@angular/core';
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

@Component({
    selector: 'employee-report',
    templateUrl: './fusionchart.component.html'
})
export class FusionchartComponent {
  dataSource: Object;
  title: string;
 
  constructor() {
    this.title = "Angular 2 FusionCharts";
 
    this.dataSource = {
      "chart": {
        "caption": "Harry's SuperMart",
        "subCaption": "Top 5 stores in last month by revenue"
      },
      "data": [{
        "label": "Bakersfield Central",
         "value": "880000"
      }, {
        "label": "Garden Groove harbour",
        "value": "730000"
      }, {
        "label": "Los Angeles Topanga",
        "value": "590000"
      }, {
        "label": "Compton-Rancho Dom",
        "value": "520000"
      }, {
        "label": "Daly City Serramonte",
        "value": "330000"
      }]
    }
  }
}