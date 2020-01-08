
export const TURNOVER_BAR_CHART = {
    tooltips: {
      mode: 'index',
      backgroundColor: 'rgba(0,0,0,0.4)',
      bodyFontColor: 'rgba(255,255,255,1)',
      borderColor: 'rgba(153, 153, 153, 1)',
      borderWidth: 1,
      caretPadding: 15,
      colorBody: 'rgba(102, 102, 102, 1)',
      displayColors: false,
      enabled: true,
      intersect: true,
      titleFontColor: 'rgba(255,255,255,1)',
      titleMarginBottom: 5,
      xPadding: 15,
      yPadding: 15,
    },
    title:{
      display: true,
      text:'',
      fontSize:'16',
      padding:'20',
      fontColor:'black'
    },
    responsive: true,
    scaleShowVerticalLines: false,
    pointLabelFontSize: 20,
    maintainAspectRatio: false,
    legend:{
      position:'bottom'
    },
    scales: {
      yAxes: [
        {
          id: '',
          type: 'linear',
          position: 'left',
          gridLines: {
            display:true
          },
          scaleLabel:{
            labelString: '',
            display:true,
            fontColor:''
          },
          ticks: {
            beginAtZero:true
          }
        }
      ]
    }
  };

export const KM_PRICES_CHART = {
    tooltips: {
      mode: 'index',
      backgroundColor: 'rgba(0,0,0,0.4)',
      bodyFontColor: 'rgba(255,255,255,1)',
      borderColor: 'rgba(153, 153, 153, 1)',
      borderWidth: 1,
      caretPadding: 15,
      colorBody: 'rgba(102, 102, 102, 1)',
      displayColors: false,
      enabled: true,
      intersect: true,
      titleFontColor: 'rgba(255,255,255,1)',
      titleMarginBottom: 5,
      xPadding: 15,
      yPadding: 15,
    },
    title: {
      display: true,
      text:'',
      fontSize:'16',
      padding:'20',
      fontColor:'black'
    },
    responsive: true,
    scaleShowVerticalLines: false,
    pointLabelFontSize: 20,
    maintainAspectRatio: false,
    legend:{
      position:'bottom'
    },
    scales: {
      yAxes: [
        {
          id: '',
          type: 'linear',
          scaleLabel:{
            labelString: '',
            display:true,
            fontColor:''
          },
          position: 'left',
          gridLines: {
            display:true
          },
          ticks: {
            beginAtZero: true,
            // max:0.5,
            callback:(value, index, values)=> {
              return value + '€';
            }
          }
        },
      ]
    }
  };

export const FILLING_RATES_CHART = {
    tooltips: {
      mode: 'index',
      backgroundColor: 'rgba(0,0,0,0.4)',
      bodyFontColor: 'rgba(255,255,255,1)',
      borderColor: 'rgba(153, 153, 153, 1)',
      borderWidth: 1,
      caretPadding: 15,
      colorBody: 'rgba(102, 102, 102, 1)',
      displayColors: false,
      enabled: true,
      intersect: true,
      titleFontColor: 'rgba(255,255,255,1)',
      titleMarginBottom: 5,
      xPadding: 15,
      yPadding: 15,
    },
    title:{
      display: true,
      text:'',
      fontSize:'16',
      padding:'20',
      fontColor:'black'
    },
    responsive: true,
    scaleShowVerticalLines: false,
    pointLabelFontSize: 20,
    maintainAspectRatio: false,
    legend:{
      position:'bottom'
    },
    scales: {
      xAxes: [{
        offset:true,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [
        {
          id: '',
          type: 'linear',
          scaleLabel:{
            labelString: '',
            display:true,
            fontColor:''
          },
          position: 'left',
          gridLines: {
            display:true
          },
          ticks: {
            beginAtZero: true,
            max:100,
            callback:(value, index, values)=> {
              return value + '%';
            }
          }
        },
      ]
    }
  };


  export const ORDERS_COUNT_PIE_CHART = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text:'',
      fontColor:'black',
      fontStyle:'bold',
      fontSize:'16'
    },
    legend:{
      labels:{
        fontColor:'',
      }
    }
  };
