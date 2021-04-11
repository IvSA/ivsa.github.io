document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.chips');
    let instances = M.Chips.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, options);
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
        data: [456.93, 708.16, 1048.44, ],
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
salesChart.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
salesChart.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
salesChart.options.legend.labels.fontColor = '#5e6e82';
salesChart.update();

checkbox.addEventListener('change', function() {
    if (this.checked) {
      salesChart.options.scales.yAxes[0].ticks.fontColor = '#fff';
      salesChart.options.scales.xAxes[0].ticks.fontColor = '#fff';
      salesChart.options.legend.labels.fontColor = '#fff';
      salesChart.update();
    } else {
      salesChart.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
      salesChart.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
      salesChart.options.legend.labels.fontColor = '#5e6e82';
      salesChart.update();
    }
});

var chip1 = document.getElementById("chip1");
chip1.addEventListener('click', function() {
    salesChart.data.datasets = salesChart.data.datasets.filter(function(obj) {
        return (obj.label != 'Окт' && obj.label != 'Окт прогноз'); 
    });
    salesChart.update();
});

var chip2 = document.getElementById("chip2");
chip2.addEventListener('click', function() {
    salesChart.data.datasets = salesChart.data.datasets.filter(function(obj) {
        return (obj.label != 'Клнг'); 
    });
    salesChart.update();
});

var chip3 = document.getElementById("chip3");
chip3.addEventListener('click', function() {
    salesChart.data.datasets = salesChart.data.datasets.filter(function(obj) {
        return (obj.label != 'Моск'); 
    });
    salesChart.update();
});

var chip4 = document.getElementById("chip4");
chip4.addEventListener('click', function() {
    salesChart.data.datasets = salesChart.data.datasets.filter(function(obj) {
        return (obj.label != 'Горьк'); 
    });
    salesChart.update();
});