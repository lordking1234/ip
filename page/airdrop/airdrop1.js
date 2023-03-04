function increment(labelValue) { 
  if (Math.abs(Number(labelValue)) >= 1.0e+9)
return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
    if (Math.abs(Number(labelValue)) >= 1.0e+6)
return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
    if (Math.abs(Number(labelValue)) >= 1.0e+3)
return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
}
// closing  converting function


//


document.getElementById("first-box").innerHTML = increment(111809)
document.getElementById("fourth-box").innerHTML = increment(111721)
document.getElementById("sixth-box").innerHTML = increment(124828 )
document.getElementById("third-box").innerHTML = increment(21394500)
document.getElementById("fifth-box").innerHTML = (150)
document.getElementById("second-box").innerHTML = increment(23454750)
document.getElementById("seventh-box").innerHTML = (300)
document.getElementById("eighth-box").innerHTML = (191)
document.getElementById("ninth-box").innerHTML = (150)








const studio1 = ["Claimers", "Remaining Claimers", "Eligible Users"];
const count1 = [ 111720,13108, 124828 ];

var chart11111 = {
  series: [{
    data: count1
  }],
    chart: {
    type: 'bar',
    height: 200 ,
    width :510  
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: '',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:studio1,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: true,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart1"), chart11111);
chart.render();


var chart2 = {

title: {
  text: '',
  subtext: '',
  left: 'center'
},
tooltip: {
  trigger: 'item'
},
legend: {
  orient: 'horizontal',
  left: 'left'
},
series: [
  {
    name: '',
    type: 'pie',
    radius: ['30%','70'],
    

          color: [
      '#37A2DA',
      '#32C5E9',
      '#67E0E3',
      '#9FE6B8',
      '#FFDB5C',
      '#ff9f7f',
      '#fb7293'],
    data: [{value:80988 , name :'150 Aptos' },{value:30821 , name :'300 Aptos' }],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }
]
}
echarts.init(document.getElementById('chart2')).setOption(chart2);




d3.csv('data.csv').then(function(datapoints){
const news = datapoints.reduce((t,i)=>{
return {...t,dates:[...t.dates,i.date],
claimerss:[...t.claimerss,i.claimers],
aptoss:[...t.aptoss,i.aptos],
cum_aptoss:[...t.cum_aptoss,i.cum_aptos],
cum_claimerss:[...t.cum_claimerss,i.cum_claimers]}

},{dates:[],claimerss:[],aptoss:[],cum_aptoss:[],cum_claimerss:[]})


chart4 = {
title: {
  text: ''
},
tooltip: {
  trigger: 'axis'
},
legend: {
  data: [ 'claimers', 'cum claimer']
},
grid: {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
},
toolbox: {
  feature: {
    saveAsImage: {}
  }
},
xAxis: {
  type: 'category',
  boundaryGap: false,
  data: news.dates
},
yAxis: {
  type: 'value'
},
series: [
  {
    name: 'Claimers',
    type: 'line',
    //stack: 'Total',
    data: news.claimerss
  },
  {
    name: 'Cumulative Claimer',
    type: 'line',
    data: news.cum_claimerss
  }
]
};
echarts.init(document.getElementById('chart4')).setOption(chart4);






chart5 = {
title: {
  text: ''
},
tooltip: {
  trigger: 'axis'
},
legend: {
  data: [ 'Aptos Claimed', 'Cum Aptos Claimed']
},
grid: {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
},
toolbox: {
  feature: {
    saveAsImage: {}
  }
},
xAxis: {
  type: 'category',
  boundaryGap: false,
  data: news.dates
},
yAxis: {
  type: 'value'
},
series: [
  {
    name: 'Aptos Claimed',
    type: 'line',
    //stack: 'Total',
    data: news.aptoss
  },
  {
    name: 'Cum Aptos Claimed',
    type: 'line',
    data: news.cum_aptoss
  }
]
};
echarts.init(document.getElementById('chart5')).setOption(chart5);

})

