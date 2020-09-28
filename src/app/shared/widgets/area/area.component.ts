import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

 @Input() data: any = [];
 chartOptions= {};

  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'RANDOM DATA'
      },
      subtitle: {
          text: 'This is some random data'
      },
      credits: {
        enabled: false
      },
      exporting: {
          enabled: true             //To export the dashboard as a file
      },
      
      tooltip: {
          split: true,
          valueSuffix: ' millions'    //Display the text when hovered on the chart
      },
      
      series: this.data     //Get the data from the Dashboard service
    } ;

    HC_exporting(Highcharts);

    setTimeout(() => {
        window.dispatchEvent(
            new Event('resize')
        );
    }, 300)
   }

}
