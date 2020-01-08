import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ChartInterface } from '../../../interfaces/chart.interface';
import moment from 'moment';

@Component({
  selector: 'app-line-bar-chart',
  templateUrl: './line-bar-chart.component.html',
  styleUrls: ['./line-bar-chart.component.css']
})
export class LineBarChartComponent implements OnInit {

  @Input() data;
  @Input() options;
  @Input() labels;
  @Input() title;
  @Input() width;
  @Input() height;
  @Input() colors;
  @Input() type;
  @Input() titleOnHover;
  
  @Output() setOrdersToShow =  new EventEmitter();

  public lineChart: ChartInterface = {
    lineChartData : [],
    lineChartLabels : [],
    lineChartOptions : [],
    lineChartColors : [],
    lineChartLegend : true,
    lineChartType : 'bar',
    lineChartPlugins: []
  };
  public isLoading;
  constructor() {}

  // get index in dataSet from an click event on canvas chart
  handleOnClick(event, active) {

    //Emit the index
    if (active[0] !== undefined) {
      this.setOrdersToShow.emit(active[0]._index);
    }
  }

  setData() {
    let newOptions = this.options;
    newOptions.title.text = this.title;
    newOptions.scales.yAxes[0].scaleLabel.fontColor = 'RGBA(0,0,0,1)';
    newOptions.scales.yAxes[1]
      ? (newOptions.scales.yAxes[1].scaleLabel.fontColor = this.colors[1].borderColor)
      : null;
    newOptions.onClick = (event, active) => this.handleOnClick(event, active);
    newOptions.onHover = (event, chartElement) => {
      event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
      event.target.title = this.titleOnHover;
    },
    this.lineChart.lineChartOptions = newOptions;

    this.lineChart.lineChartColors = this.colors;

    this.lineChart.lineChartLabels = this.data[0].length <= 12 ? this.data[0].map(date => moment().month(date - 1).format('MMMM')) : this.data[0];

    if (this.type.length === 2){
      this.lineChart.lineChartData = [
        {
          data: this.data[1],
          label: this.labels.labelDataLine,
          type: this.type[0],
          yAxisID: this.labels.labelYaxeLine,
          pointBackgroundColor: '',
          pointHoverBackgroundColor: '',
        },
        {
          label: this.labels.labelData1,
          data: this.data[2],
          yAxisID: this.labels.labelYaxe2,
          type: this.type[1],
        }
      ];
    } else if (this.type.length === 1) {
      this.lineChart.lineChartData = [
        {
          data: this.data[1],
          label: this.labels.labelDataLine,
          type: this.type[0],
          yAxisID: this.labels.labelYaxeLine,
          pointBackgroundColor: '',
          pointHoverBackgroundColor: '',
        }
      ];
    }
  }

  ngOnInit() {}

  ngOnChanges(changes) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    })
    this.setData();
  }
}
