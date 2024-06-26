
var chart1 = {
    series: [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Traffic Sources'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Website Blog',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Social Media'
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart1);
  chart.render();


//   chart2
var chart2 = {
    series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average High & Low Temperature',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), chart2);
  chart.render();




//   chart3
var chart3 = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
    width: '100%',
    type: 'pie',
  },
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  theme: {
    monochrome: {
      enabled: true
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5
      }
    }
  },
  title: {
    text: "Monochrome Pie"
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex]
      return [name, val.toFixed(1) + '%']
    }
  },
  legend: {
    show: false
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), chart3);
  chart.render();



  // donut chart
  var donutChart1 = {
    series: [42, 26, 32], // Percentage values for Product A, B, and C
    chart: {
        type: 'donut',
        height: 222
    },
    labels: ['Product A', 'Product B', 'Product C'],
    colors: ['#008FFB', '#00E396', '#FEB019'],
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            }
        }
    }]
};

// Render the chart
var chart = new ApexCharts(document.querySelector("#donutChart1"), donutChart1);
chart.render();



// spak-chart1

var spakChart1 = {
  series: [{ data: [24, 62, 42, 84, 63, 25, 44, 46, 54, 28, 54] }],
  chart: {
    type: "line",
    width: 80,
    height: 35,
    sparkline: { enabled: !0 },
  },
  stroke: { width: [3], curve: "smooth" },
  colors: ["#5664d2"],
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
};
// Render the chart
var chart = new ApexCharts(document.querySelector("#spak-chart1"), spakChart1);
chart.render();


// spak-chart2
var spakChart2 = {
  series: [{ data: [21, 15, 33, 54, 38, 28, 40, 18, 49, 12, 4] }],
  chart: {
    type: "line",
    width: 80,
    height: 35,
    sparkline: { enabled: !0 },
  },
  stroke: { width: [3], curve: "smooth" },
  colors: ["#5664d2"],
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
};
// Render the chart
var chart = new ApexCharts(document.querySelector("#spak-chart2"), spakChart2);
chart.render();


// spak-chart2
var spakChart3 = {
  series: [{ data: [24, 62, 42, 84, 63, 25, 44, 46, 54, 28, 54] }],
  chart: {
    type: "line",
    width: 80,
    height: 35,
    sparkline: { enabled: !0 },
  },
  stroke: { width: [3], curve: "smooth" },
  colors: ["#5664d2"],
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
};
// Render the chart
var chart = new ApexCharts(document.querySelector("#spak-chart3"), spakChart3);
chart.render();