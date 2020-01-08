import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

export interface ChartInterface {
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: any;
  lineChartColors: Color[];
  lineChartLegend: boolean;
  lineChartType: string;
  lineChartPlugins: [];
}
