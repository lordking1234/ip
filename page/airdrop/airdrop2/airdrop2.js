function increment(labelValue) { 
    if (Math.abs(Number(labelValue)) >= 1.0e+9)
return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
      if (Math.abs(Number(labelValue)) >= 1.0e+6)
return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
      if (Math.abs(Number(labelValue)) >= 1.0e+3)
return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
}
// closing  converting function






document.getElementById("first-box").innerHTML = increment(93669480)
document.getElementById("second-box").innerHTML = increment(35702637)
document.getElementById("third-box").innerHTML = increment(2479697)
document.getElementById("fourth-box").innerHTML = (0.4905)
document.getElementById("fifth-box").innerHTML = increment(89809.61 )
document.getElementById("sixth-box").innerHTML = (0.0040)
document.getElementById("seventh-box").innerHTML = (1351)
document.getElementById("8th-box").innerHTML = (0.0040)






const op = [
  {
    value: 6.62,
    name: 'TPS',
    title: {
      offsetCenter: ['-70%', '125%']
    },
    detail: {
      offsetCenter: ['-70%', '95%']
    }
  },
  {
    value: 397.4,
    name: 'TPM',
    title: {
      offsetCenter: ['0%', '125%']
    },
    detail: {
      offsetCenter: ['0%', '95%']
    }
  },
  {
    value: 23844,
    name: 'TPH',
    title: {
      offsetCenter: ['70%', '125%']
    },
    detail: {
      offsetCenter: ['70%', '95%']
    }
  }
];
chart3 = {
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 18,
        itemStyle: {
          color: '#FAC810'
        }
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '60%',
        offsetCenter: [0, '8%']
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      data: op,
      title: {
        fontSize: 14
      },
      detail: {
        width: 40,
        height: 14,
        fontSize: 14,
        color: '#fff',
        backgroundColor: 'inherit',
        borderRadius: 3,
        formatter: '{value}'
      }
    }
  ]
};

   echarts.init(document.getElementById('chart3')).setOption(chart3);




   const gaugeData = [
    {
      value: 98.5,
      name: 'Success rate',
      title: {
        offsetCenter: ['0%', '80%']
      },
      detail: {
        offsetCenter: ['0%', '110%']
      }
    }
  ];
  chart4 = {
    series: [
      {
        type: 'gauge',
        anchor: {
          show: true,
          showAbove: true,
          size: 18,
          itemStyle: {
            color: '#FAC810'
          }
        },
        pointer: {
          icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
          width: 8,
          length: '60%',
          offsetCenter: [0, '8%']
        },
        progress: {
          show: true,
          overlap: true,
          roundCap: true
        },
        axisLine: {
          roundCap: true
        },
        data: gaugeData,
        title: {
          fontSize: 14
        },
        detail: {
          width: 40,
          height: 14,
          fontSize: 14,
          color: '#fff',
          backgroundColor: 'inherit',
          borderRadius: 3,
          formatter: '{value}'
        }
      }
    ]
  };
  
echarts.init(document.getElementById('chart4')).setOption(chart4);




const op1 = [
  {
    value: 2.63,
    name: 'Avg Trans Per Block',
    title: {
      offsetCenter: ['0%', '90%']
    },
    detail: {
      offsetCenter: ['0%', '120%']
    }
  }
];
chart5 = {
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 18,
        itemStyle: {
          color: '#FAC810'
        }
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '60%',
        offsetCenter: [0, '8%']
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      data: op1,
      title: {
        fontSize: 14
      },
      detail: {
        width: 40,
        height: 14,
        fontSize: 14,
        color: '#fff',
        backgroundColor: 'inherit',
        borderRadius: 3,
        formatter: '{value}'
      }
    }
  ]
};

echarts.init(document.getElementById('chart5')).setOption(chart5);





d3.csv('data4.csv').then(function(datapoints){
  const newss = datapoints.reduce((t,i)=>{
  return {...t,dates:[...t.dates,i.date],
    New_Contractss:[...t.New_Contractss,i.Fee],
    Total_Contractss:[...t.Total_Contractss,i.Cumulative_Fee],
    DAILY_TANS:[...t.DAILY_TANS,i.Transactions]}
  
  },{dates:[],New_Contractss:[],Total_Contractss:[],DAILY_TANS:[]})
  
  
  chart00 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [ 'New Aptos burned as Fee', 'Total Aptos burned as Fee']
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
            data: newss.dates
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: 'New Aptos burned as Fee',
            type: 'line',
            //stack: 'Total',
            data: newss.New_Contractss
            },
            {
            name: 'Total Aptos burned as Fee',
            type: 'line',
            data: newss.Total_Contractss
            }
        ]
        };
  echarts.init(document.getElementById('chart00')).setOption(chart00);
  
  
  
  
  chart000 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [ 'Daily Transactions']
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
            data: newss.dates
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: 'Daily Transactions',
            type: 'line',
            //stack: 'Total',
            data: newss.DAILY_TANS
            }
        ]
        };
  echarts.init(document.getElementById('chart000')).setOption(chart000);
  })




d3.csv('data2.csv').then(function(datapoints){
  const news = datapoints.reduce((t,i)=>{
  return {...t,dates:[...t.dates,i.date],
    new_userss:[...t.new_userss,i.new_users],
    Total_userss:[...t.Total_userss,i.Total_users]}
  
  },{dates:[],new_userss:[],Total_userss:[]})
  
  
  chart1 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [ 'New Users', 'Total Users']
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
            name: 'New Users',
            type: 'line',
            //stack: 'Total',
            data: news.new_userss
            },
            {
            name: 'Total Users',
            type: 'line',
            data: news.Total_userss
            }
        ]
        };
  echarts.init(document.getElementById('chart1')).setOption(chart1);
  })



d3.csv('data3.csv').then(function(datapoints){
  const newss = datapoints.reduce((t,i)=>{
  return {...t,dates:[...t.dates,i.date],
    New_Contractss:[...t.New_Contractss,i.New_Contracts],
    Total_Contractss:[...t.Total_Contractss,i.Total_Contracts]}
  
  },{dates:[],New_Contractss:[],Total_Contractss:[]})
  
  
  chart0 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [ 'New Contracts', 'Total Contracts']
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
            data: newss.dates
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: 'New Contracts',
            type: 'line',
            //stack: 'Total',
            data: newss.New_Contractss
            },
            {
            name: 'Total Contracts',
            type: 'line',
            data: newss.Total_Contractss
            }
        ]
        };
  echarts.init(document.getElementById('chart0')).setOption(chart0);
  })








d3.csv('data1.csv').then(function(datapoints){
  let selectedProps = datapoints.reduce((acc, curr) => {
    let { total_addresses:value,number:name } = curr;
    return [...acc, { value,name }];
  }, []);
  
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
        orient: 'vertical',
        left: 'right'
        },
        series: [
        {
            name: '',
            type: 'pie',
            radius: ['20%','80%'],
            

                color: [
            '#37A2DA',
            '#32C5E9',
            '#67E0E3',
            '#9FE6B8',
            '#FFDB5C',
            '#ff9f7f',
            '#fb7293'],
            data: selectedProps,
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
  })
  






d3.csv('data6.csv').then(function(datapoints){
  let selectedProps = datapoints.reduce((acc, curr) => {
    let { trxs:value,type:name } = curr;
    return [...acc, { value,name }];
  }, []);
  
chart22 = {
  
        title: {
        text: '',
        subtext: '',
        left: 'center'
        },
        tooltip: {
        trigger: 'item'
        },
        legend: {
        orient: 'vertical',
        left: 'left'
        },
        series: [
        {
            name: '',
            type: 'pie',
            radius: ['20%','80%'],
            

                color: [
            '#37A2DA',
            '#32C5E9',
            '#67E0E3',
            '#9FE6B8',
            '#FFDB5C',
            '#ff9f7f',
            '#fb7293'],
            data: selectedProps,
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
 echarts.init(document.getElementById('chart22')).setOption(chart22);
  })
  


d3.csv('data5.csv').then(function(datapoints){
  const newss = datapoints.reduce((t,i)=>{
  return {...t,dates:[...t.dates,i.date],
    New_Contractss:[...t.New_Contractss,i.volume],
    Total_Contractss:[...t.Total_Contractss,i.Cumulative_Volume]}
  
  },{dates:[],New_Contractss:[],Total_Contractss:[]})
  
  
  chart11 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [ 'Daily Volume of Transactions(Aptos)', 'Total Volume of Transactions (Aptos)']
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
            data: newss.dates
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: 'Daily Volume of Transactions(Aptos)',
            type: 'line',
            //stack: 'Total',
            data: newss.New_Contractss
            },
            {
            name: 'Total Volume of Transactions (Aptos)',
            type: 'line',
            data: newss.Total_Contractss
            }
        ]
        };
  echarts.init(document.getElementById('chart11')).setOption(chart11);
  })
