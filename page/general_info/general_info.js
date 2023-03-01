function increment(labelValue) { 
    if (Math.abs(Number(labelValue)) >= 1.0e+9)
return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
      if (Math.abs(Number(labelValue)) >= 1.0e+6)
return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
      if (Math.abs(Number(labelValue)) >= 1.0e+3)
return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
}
// closing  converting function




//-----------------------------------------------------------------------------------------


fetch('https://api.geniidata.com/lordking/api/v1/datasource/12577/results?limit=20&offset=0', {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'a94fdce0-b66c-11ed-9d24-019c684cbdd6'
    }
})
.then(response => response.json())
.then(data =>{


document.getElementById("first-box").innerHTML = increment(data.data.list[0].trxs)
document.getElementById("second-box").innerHTML = increment(data.data.list[0].Blocks)
document.getElementById("third-box").innerHTML = increment(data.data.list[0].wallet)
document.getElementById("fourth-box").innerHTML = increment(data.data.list[0].aptos)
document.getElementById("fifth-box").innerHTML = increment(data.data.list[0].Fee )
document.getElementById("sixth-box").innerHTML = (Math.floor((data.data.list[0].Avg_Fee)*1000)/1000)
document.getElementById("seventh-box").innerHTML = (data.data.list[0].Contracts)
document.getElementById("8th-box").innerHTML = (Math.floor((data.data.list[0].time_between_two_block)*100)/100)




        //-----------------------------------------------------------------------------------------


const tpm = [
  {
    value: (Math.floor((data.data.list[0].TPS)*100)/100),
    name: 'TPS',
    title: {
      offsetCenter: ['-70%', '125%']
    },
    detail: {
      offsetCenter: ['-70%', '95%']
    }
  },
  {
    value: (Math.floor((data.data.list[0].TPM)*100)/100),
    name: 'TPM',
    title: {
      offsetCenter: ['0%', '125%']
    },
    detail: {
      offsetCenter: ['0%', '95%']
    }
  },
  {
    value: (Math.abs(Number((data.data.list[0].TPH)) / 1.0e+3).toFixed(2)) ,
    name: 'TPH (K)',
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
      data: tpm,
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



        //-----------------------------------------------------------------------------------------



   const gaugeData = [
    {
      value: (Math.floor((data.data.list[0].Success_rate)*100)/100),
      name: 'Success Rate',
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



        //-----------------------------------------------------------------------------------------


const op1 = [
  {
    value: (Math.floor((data.data.list[0].Avg_Trans_Per_Block)*100)/100),
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

})

//-----------------------------------------------------------------------------------------



fetch('https://api.geniidata.com/lordking/api/v1/datasource/12576/results?limit=500&offset=0', {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'a94fdce0-b66c-11ed-9d24-019c684cbdd6'
    }
})
.then(response => response.json())
.then(data =>{

  const newss = data.data.list.reduce((t,i)=>{
  return {...t,
    dates:[...t.dates,i.date] ,
    Cumulative_Fees:[...t.Cumulative_Fees,i.Cumulative_Fee] ,
    Cumulative_Volumes:[...t.Cumulative_Volumes,i.Cumulative_Volume] ,
    Fees:[...t.Fees,i.Fee] ,
    New_smart_contracts:[...t.New_smart_contracts,i.New_smart_contract] ,
    Total_smart_contracts:[...t.Total_smart_contracts,i.Total_smart_contract] ,
    Transactionss:[...t.Transactionss,i.Transactions] ,
    new_userss:[...t.new_userss,i.new_users] ,
    volumes:[...t.volumes,i.volume]  ,
    Total_userss:[...t.Total_userss,i.Total_users]  
  }

},{dates:[],Cumulative_Fees:[],Cumulative_Volumes:[],Fees:[],New_smart_contracts:[],Total_smart_contracts:[],Total_smart_contracts:[],Transactionss:[],new_userss:[],volumes:[],Total_userss:[]})
  
  chart00 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [ 'Daily Aptos burned as Fee', 'Total Aptos burned as Fee']
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
            name: 'Daily Aptos burned as Fee',
            type: 'line',
            //stack: 'Total',
            data: newss.Fees
            },
            {
            name: 'Total Aptos burned as Fee',
            type: 'line',
            data: newss.Cumulative_Fees
            }
        ]
        };
  echarts.init(document.getElementById('chart00')).setOption(chart00);
  
 
 
         //-----------------------------------------------------------------------------------------

  
  
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
            data: newss.Transactionss
            }
        ]
        };
  echarts.init(document.getElementById('chart000')).setOption(chart000);
  
  
        //-----------------------------------------------------------------------------------------


 
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
            data: newss.dates
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: 'New Users',
            type: 'line',
            //stack: 'Total',
            data: newss.new_userss
            },
            {
            name: 'Total Users',
            type: 'line',
            data: newss.Total_userss
            }
        ]
        };
  echarts.init(document.getElementById('chart1')).setOption(chart1);
  
  
  
  
          //----------------------------------------------------------------------------------------

  
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
            data: newss.New_smart_contracts
            },
            {
            name: 'Total Contracts',
            type: 'line',
            data: newss.Total_smart_contracts
            }
        ]
        };
  echarts.init(document.getElementById('chart0')).setOption(chart0);
  
  
  
  
       //-------------------------------------------------------------------------
       
  
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
            data: newss.volumes
            },
            {
            name: 'Total Volume of Transactions (Aptos)',
            type: 'line',
            data: newss.Cumulative_Volumes
            }
        ]
        };
  echarts.init(document.getElementById('chart11')).setOption(chart11);
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
  


  
  
  d3.csv('data7.csv').then(function(datapoints){
//console.log(datapoints)

//put our selected data in seperate array and called them arr1 and arr2 
    let results = datapoints.reduce((acc, curr) => {
    // # change : just change status name (names) and count (value) here  => push(curr.profit) and   push(curr.cost)     
    acc.profits.push(curr.event_name); 
    acc.costs.push(curr.Total_Volume);
    return acc;
    }, {profits: [], costs: []});

let arr2 = results.profits;
let arr1 = results.costs;
//console.log(arr1)
// ; console.log(arr2) ;


let result = arr2.reduce((acc, curr, i) => {
  let value = arr1[i];
  if (!acc[curr]) {
    acc[curr] = Number(value);
  } else {
    acc[curr] += Number(value);
  }
  return acc;
}, {});

let finalResult = Object.keys(result).map(key => {
  return {
    value: result[key],
    name : key
  }
})


     
    
chart33 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
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
      data: finalResult,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
   echarts.init(document.getElementById('chart33')).setOption(chart33);
   
    })
    
    
    
    
    
    
    d3.csv('data7.csv').then(function(datapoints){
//console.log(datapoints)

//put our selected data in seperate array and called them arr1 and arr2 
    let results = datapoints.reduce((acc, curr) => {
    // # change : just change status name (names) and count (value) here  => push(curr.profit) and   push(curr.cost)     
    acc.profits.push(curr.event_name); 
    acc.costs.push(curr.trxs);
    return acc;
    }, {profits: [], costs: []});

let arr2 = results.profits;
let arr1 = results.costs;
//console.log(arr1)
// ; console.log(arr2) ;


let result = arr2.reduce((acc, curr, i) => {
  let value = arr1[i];
  if (!acc[curr]) {
    acc[curr] = Number(value);
  } else {
    acc[curr] += Number(value);
  }
  return acc;
}, {});

let finalResult = Object.keys(result).map(key => {
  return {
    value: result[key],
    name : key
  }
})


     
    
chart44 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
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
      data: finalResult,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
   echarts.init(document.getElementById('chart44')).setOption(chart44);
   
    })
