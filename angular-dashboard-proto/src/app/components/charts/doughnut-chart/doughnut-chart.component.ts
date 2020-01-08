import { Component, OnInit, Input } from '@angular/core';

import { ChartInterface } from './../../../interfaces/chart.interface';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input() title;
  @Input() data;
  @Input() labels;
  @Input() options;

  private isLoading = true;

  public lineChart: ChartInterface = {
    lineChartData : [],
    lineChartLabels : [],
    lineChartOptions : this.options,
    lineChartColors : [
      {
        borderColor: 'RGBA(54, 212, 95, 1)',
        backgroundColor: ['RGBA(54, 212, 133, 1)', 'RGBA(54, 255, 95, 0.7)']
      }
    ],
    lineChartLegend : true,
    lineChartType : 'doughnut',
    lineChartPlugins: []
  };

  constructor() {}

  setData() {

    if (this.data) {
      this.lineChart.lineChartData = [{ data: [this.data[0], this.data[1]] }];
      this.lineChart.lineChartLabels = this.labels;
      this.lineChart.lineChartOptions = this.options;
      this.lineChart.lineChartOptions.title.text = `${this.title} ${this.data[2]} %`;
    }
    
  }

  ngOnInit() {}

  ngOnChanges() {

    this.isLoading = true;

    this.setData();

    setTimeout(() => {
      if (this.data[0]) { 
        (this.isLoading = false);
      }
    });

  }
}
