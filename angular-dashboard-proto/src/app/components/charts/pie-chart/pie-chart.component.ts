import { Component, OnInit, Input } from '@angular/core';

import { ChartInterface } from './../../../interfaces/chart.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() title: string;
  @Input() data;
  @Input() labels: string[];
  @Input() options;
  @Input() text;

  public isLoading: boolean = true;

  public lineChart: ChartInterface = {
    lineChartData : [],
    lineChartLabels : [],
    lineChartOptions : this.options,
    lineChartColors : [
      {
        borderColor: 'RGBA(54, 212, 95, 1)',
        backgroundColor: ['RGBA(54, 212, 133, 1)', 'RGBA(54, 255, 95, 0.7)', 'RGBA(54, 185, 105, 0.7)']
      }
    ],
    lineChartLegend : true,
    lineChartType : 'pie',
    lineChartPlugins: []
  };

  constructor() {}

  setData() {;
    if (this.data) {
      this.lineChart.lineChartData = [
        {
          data: this.data
        }
      ];
      this.lineChart.lineChartLabels = this.labels;
      this.lineChart.lineChartOptions = this.options;
      this.lineChart.lineChartOptions.title.text = this.title;
    }
  }

  ngOnInit() {}

  ngOnChanges() {
    this.isLoading = true;

    setTimeout(() => {
        this.isLoading = false;
      });
    this.setData();
  }
}
