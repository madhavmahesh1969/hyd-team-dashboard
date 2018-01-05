import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { routerTransitionToLeft } from '../../../animations/router.animations';
// Load the exporting module.
import * as Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts); 

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
  animations: [routerTransitionToLeft()],
  host: {'[@routerTransitionToLeft]': ''}
})
export class WeatherReportComponent implements OnInit {
  mychart:any;
  constructor() { }

  ngOnInit() {
	    // Generate the chart
		Highcharts.setOptions({
			lang: {
				months: [
					'Janvier', 'Février', 'Mars', 'Avril',
					'Mai', 'Juin', 'Juillet', 'Août',
					'Septembre', 'Octobre', 'Novembre', 'Décembre'
				],
				weekdays: [
					'Dimanche', 'Lundi', 'Mardi', 'Mercredi',
					'Jeudi', 'Vendredi', 'Samedi'
				]
			}
		});
		this.mychart = Highcharts.chart('container', {title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            name: 'Tokyo',
            data: [
                7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
                26.5, 23.3, 18.3, 13.9, 9.6
            ]
        }],
		chart: {
			type: 'line'			
		}		// options - see https://api.highcharts.com/highcharts
		  
		});
  }
}

