
// javascript library for creating charts

var Chartist = require("chartist");

// // // variables used to create animation on charts

var delays = 80,
  durations = 500;


 // Sold Book Details 


const soldbookChart = {
  data: {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016","2017","2018","2019"],
    series: [[90, 42, 39, 40, 41, 100, 45, 45,45,46,87]],
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0,
    }),
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    },
  },
};

module.exports = {
  
  soldbookChart,
};
