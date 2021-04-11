checkbox.addEventListener('change', function() {
  if (this.checked) {
    myChart.options.scales.yAxes[0].ticks.fontColor = '#fff';
    myChart.options.scales.xAxes[0].ticks.fontColor = '#fff';
    myChart.options.legend.labels.fontColor = '#fff';
    myChart.update();
  } else {
    myChart.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
    myChart.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
    myChart.options.legend.labels.fontColor = '#5e6e82';
    myChart.update();
  }
});

const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge-fill").style.transform = 'rotate(' + (value / 2) + 'turn';
  gauge.querySelector(".gauge-cover").textContent = (Math.round(value * 100)) + '%';
}

setGaugeValue(gaugeElement, 0.8);


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
        label: 'Факт',
        fill: true,
        backgroundColor: 'rgba(114, 124, 245, 0.4)',/*'#727cf5'*/
        borderColor: '#727cf5',
        borderWidth: 2,
        hoverBorderWidth: 6,
        // cubicInterpolationMode: 'monotone',
        // tension: 0.4,
        data: [456.93, 708.16, 1048.44, 1402.08],
      },
      {
        label: 'План',
        fill: true,
        backgroundColor: 'rgba(10, 207, 151, 0.8)'/*'#0acf97'*/,
        borderColor: '#0acf97',
        borderWidth: 2,
        hoverBorderWidth: 6,
        data: [356.93, 608.16, 748.44, 1202.08],
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

var myChart = new Chart(
    document.getElementById('mainGraphic'),
    config
);
myChart.options.scales.yAxes[0].ticks.fontColor = '#5e6e82';
myChart.options.scales.xAxes[0].ticks.fontColor = '#5e6e82';
myChart.options.legend.labels.fontColor = '#5e6e82';
myChart.update();