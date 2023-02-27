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
document.getElementById("sixth-box").innerHTML = increment(110235)
document.getElementById("third-box").innerHTML = increment(21394500)
document.getElementById("fifth-box").innerHTML = (150)
document.getElementById("second-box").innerHTML = increment(20076150)
document.getElementById("seventh-box").innerHTML = (300)
document.getElementById("eighth-box").innerHTML = (191)
document.getElementById("ninth-box").innerHTML = (150)









 
chart1 = {
tooltip: {
  trigger: 'axis',
  axisPointer: {
    type: 'shadow' 
  }
},
legend: {
  left: 'left' 
},
grid: {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
},
xAxis: {
  type: 'value'
},
yAxis: {
  type: 'category',
  data: []
},
series: [
  {
    name: 'Eligible Claimer',
    type: 'bar',
    stack: 'total',
    color:['#FD4592'] ,
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data:[0,110235,0,0]
  },
  {
    name: 'Remaining Claimer',
    type: 'bar',
    stack: 'total',
    color:['#ED93B9'] ,
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data:[0,0,0,0]
  },
  {
    name: 'Total Claimer',
    type: 'bar',
    stack: 'total',
    color:['#F0F23A'] ,
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data:[0,0,0,111721]
  }
]
};
echarts.init(document.getElementById('chart1')).setOption(chart1);




chart2 = {

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

