document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);

  let elems2 = document.querySelectorAll('.chips');
  let instances2 = M.Chips.init(elems2);

  let elems3 = document.querySelectorAll('.modal');
  let instances3 = M.Modal.init(elems3);
});

const labels = [
    '1',
    '2',
    '3',
    '4',
];
const data = {
    labels: labels,
    datasets: [
      {
        label: 'Окт',
        fill: false,
        backgroundColor: 'rgba(114, 124, 245, 0.4)',/*'#727cf5'*/
        borderColor: '#727cf5',
        borderWidth: 2,
        hoverBorderWidth: 6,
        data: [456.93, 456.93, 1048.44, ],
      },
      {
        label: 'Окт прогноз',
        fill: false,
        backgroundColor: 'rgba(114, 124, 245, 0.4)',/*'#727cf5'*/
        borderColor: '#727cf5',
        borderWidth: 2,
        hoverBorderWidth: 6,
        borderDash: [6, 6],
        data: [, , 1048.44, 1402.08],
      },
      {
        label: 'Клнг',
        fill: false,
        backgroundColor: 'rgba(10, 207, 151, 0.8)'/*'#0acf97'*/,
        borderColor: '#0acf97',
        borderWidth: 2,
        hoverBorderWidth: 6,
        data: [356.93, 608.16, 748.44, 1202.08],
      },
      {
        label: 'Моск',
        fill: false,
        backgroundColor: '#e46837'/*'#0acf97'*/,
        borderColor: '#e46837',
        borderWidth: 2,
        hoverBorderWidth: 6,
        data: [256.93, 408.16, 448.44, 1342.08],
      },
      {
        label: 'Горьк',
        fill: false,
        backgroundColor: '#8b34fd'/*'#0acf97'*/,
        borderColor: '#8b34fd',
        borderWidth: 2,
        hoverBorderWidth: 6,
        data: [58.93, 128.16, 521.44, 644.08],
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    legend: {
      labels: {
        fontColor: '#fff'
     }
  },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: '#344050'
          }
        },
        scales:{
            xAxes: [{
                gridLines: {
                  display: true,
                  drawBorder: true,
                  drawOnChartArea: true,
                  drawTicks: true,
                },
                // stacked: true,
                ticks: {
                  fontColor: "#344050",
                  callback: function(val, index) {
                    return val + ' квартал';
                  },
                }
            }],
            yAxes: [{
                gridLines : {
                    display : false
                },
                // stacked: true,
                ticks: {
                  fontColor: "#344050"
                }
            }]
        }
      },
};

const configBar = {
  type: 'bar',
  data: data,
  legend: {
    labels: {
      fontColor: '#fff'
   }
},
  options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          fontColor: '#344050'
        }
      },
      scales:{
          xAxes: [{
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: true,
                drawTicks: true,
              },
              // stacked: true,
              ticks: {
                fontColor: "#344050",
                callback: function(val, index) {
                  return val + ' квартал';
                },
              }
          }],
          yAxes: [{
              gridLines : {
                  display : false
              },
              // stacked: true,
              ticks: {
                fontColor: "#344050"
              }
          }]
      }
    },
};

var salesChart = new Chart(
    document.getElementById('salesChart'),
    config
);

var salesChart2 = new Chart(
  document.getElementById('salesChart2'),
  config
);

var salesChart3 = new Chart(
  document.getElementById('salesChart3'),
  config
);

document.getElementById("iconChartLine").style.display = 'none';
// document.getElementById("iconDisplayList").style.display = 'none';

salesChart.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
salesChart.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
salesChart.options.legend.labels.fontColor = '#5e6e82';
salesChart.update();

salesChart2.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
salesChart2.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
salesChart2.options.legend.labels.fontColor = '#5e6e82';
salesChart2.update();

salesChart3.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
salesChart3.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
salesChart3.options.legend.labels.fontColor = '#5e6e82';
salesChart3.update();

checkbox.addEventListener('change', function() {
    if (this.checked) {
      salesChart.options.scales.yAxes[0].ticks.fontColor = '#fff';
      salesChart.options.scales.xAxes[0].ticks.fontColor = '#fff';
      salesChart.options.legend.labels.fontColor = '#fff';
      salesChart.update();

      salesChart2.options.scales.yAxes[0].ticks.fontColor = '#fff';
      salesChart2.options.scales.xAxes[0].ticks.fontColor = '#fff';
      salesChart2.options.legend.labels.fontColor = '#fff';
      salesChart2.update();

      salesChart3.options.scales.yAxes[0].ticks.fontColor = '#fff';
      salesChart3.options.scales.xAxes[0].ticks.fontColor = '#fff';
      salesChart3.options.legend.labels.fontColor = '#fff';
      salesChart3.update();
    } else {
      salesChart.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
      salesChart.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
      salesChart.options.legend.labels.fontColor = '#5e6e82';
      salesChart.update();

      salesChart2.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
      salesChart2.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
      salesChart2.options.legend.labels.fontColor = '#5e6e82';
      salesChart2.update();

      salesChart3.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
      salesChart3.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
      salesChart3.options.legend.labels.fontColor = '#5e6e82';
      salesChart3.update();
    }
});

var chip1 = document.getElementById("chip1");
chip1.addEventListener('click', function() {
    salesChart.data.datasets = salesChart.data.datasets.filter(function(obj) {
        return (obj.label != 'Окт' && obj.label != 'Окт прогноз'); 
    });
    salesChart.update();

    salesChart2.data.datasets = salesChart2.data.datasets.filter(function(obj) {
      return (obj.label != 'Окт' && obj.label != 'Окт прогноз'); 
    });
    salesChart2.update();

    salesChart3.data.datasets = salesChart3.data.datasets.filter(function(obj) {
      return (obj.label != 'Окт' && obj.label != 'Окт прогноз'); 
    });
    salesChart3.update();
});

var chip2 = document.getElementById("chip2");
chip2.addEventListener('click', function() {
    salesChart.data.datasets = salesChart.data.datasets.filter(function(obj) {
        return (obj.label != 'Клнг'); 
    });
    salesChart.update();

    salesChart2.data.datasets = salesChart2.data.datasets.filter(function(obj) {
      return (obj.label != 'Клнг'); 
    });
    salesChart2.update();

    salesChart3.data.datasets = salesChart3.data.datasets.filter(function(obj) {
      return (obj.label != 'Клнг'); 
    });
    salesChart3.update();
});

var chip3 = document.getElementById("chip3");
chip3.addEventListener('click', function() {
    salesChart.data.datasets = salesChart.data.datasets.filter(function(obj) {
        return (obj.label != 'Моск'); 
    });
    salesChart.update();

    salesChart2.data.datasets = salesChart2.data.datasets.filter(function(obj) {
      return (obj.label != 'Моск'); 
    });
    salesChart2.update();

    salesChart3.data.datasets = salesChart3.data.datasets.filter(function(obj) {
      return (obj.label != 'Моск'); 
    });
    salesChart3.update();
});

var chip4 = document.getElementById("chip4");
chip4.addEventListener('click', function() {
    salesChart.data.datasets = salesChart.data.datasets.filter(function(obj) {
        return (obj.label != 'Горьк'); 
    });
    salesChart.update();

    salesChart2.data.datasets = salesChart2.data.datasets.filter(function(obj) {
      return (obj.label != 'Горьк'); 
    });
    salesChart2.update();

    salesChart3.data.datasets = salesChart3.data.datasets.filter(function(obj) {
      return (obj.label != 'Горьк'); 
    });
    salesChart3.update();
});


function changeViewChart(chartView) {
  salesChart.destroy();
  salesChart = new Chart(
    document.getElementById('salesChart'),
    chartView === 'line' ? config : configBar
  );

  salesChart2.destroy();
  salesChart2 = new Chart(
    document.getElementById('salesChart2'),
    chartView === 'line' ? config : configBar
  );

  salesChart3.destroy();
  salesChart3 = new Chart(
    document.getElementById('salesChart3'),
    chartView === 'line' ? config : configBar
  );

  if(chartView === 'line') {
    document.getElementById("iconChartLine").style.display = 'none';
    document.getElementById("iconChartBar").style.display = 'block';
  } else {
    document.getElementById("iconChartBar").style.display = 'none';
    document.getElementById("iconChartLine").style.display = 'block';
  }
}


var chartWrapper = document.getElementById("chartWrapper");
var chartWrapper2 = document.getElementById("chartWrapper2");
var chartWrapper3 = document.getElementById("chartWrapper3");

function changeDisplayChart(displayViews) {
  if(displayViews === 'row') {
    chartWrapper.classList.remove('s4');
    chartWrapper.classList.remove('m6');
    chartWrapper.classList.add('s12');
    chartWrapper2.classList.remove('s4');
    chartWrapper2.classList.remove('m6');
    chartWrapper2.classList.add('s12');
    chartWrapper3.classList.remove('s4');
    chartWrapper3.classList.remove('m6');
    chartWrapper3.classList.add('s12');
    chartWrapper.style.height = 'calc(91vh - 60px - 20px - 20px)';
    chartWrapper2.style.height = 'calc(91vh - 60px - 20px - 20px)';
    chartWrapper3.style.height = 'calc(91vh - 60px - 20px - 20px)';
    // #chartWrapper, #chartWrapper2, #chartWrapper3 {
    //   position: relative;
    //   height: calc(91vh - 60px - 20px - 20px);
    // }

    // document.getElementById("iconDisplayList").style.display = 'none';
    // document.getElementById("iconDisplayRow").style.display = 'block';
  } else if(displayViews === 'table') {
    chartWrapper.classList.remove('s4');
    chartWrapper.classList.add('s12');
    chartWrapper.classList.add('m6');
    chartWrapper2.classList.remove('s4');
    chartWrapper2.classList.add('s12');
    chartWrapper2.classList.add('m6');
    chartWrapper3.classList.remove('s4');
    chartWrapper3.classList.add('s12');
    chartWrapper3.classList.add('m6');
    chartWrapper.style.height = 'calc(50vh - 60px - 20px - 20px)';
    chartWrapper2.style.height = 'calc(50vh - 60px - 20px - 20px)';
    chartWrapper3.style.height = 'calc(50vh - 60px - 20px - 20px)';

    // document.getElementById("iconDisplayList").style.display = 'none';
    // document.getElementById("iconDisplayRow").style.display = 'block';
  }else {
    chartWrapper.classList.remove('s12');
    chartWrapper.classList.remove('m6');
    chartWrapper.classList.add('s4');
    chartWrapper2.classList.remove('s12');
    chartWrapper2.classList.remove('m6');
    chartWrapper2.classList.add('s4');
    chartWrapper3.classList.remove('s12');
    chartWrapper3.classList.remove('m6');
    chartWrapper3.classList.add('s4');
    chartWrapper.style.height = 'calc(91vh - 60px - 20px - 20px)';
    chartWrapper2.style.height = 'calc(91vh - 60px - 20px - 20px)';
    chartWrapper3.style.height = 'calc(91vh - 60px - 20px - 20px)';

    // document.getElementById("iconDisplayRow").style.display = 'none';
    // document.getElementById("iconDisplayList").style.display = 'block';
  }
}