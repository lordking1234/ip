function increment(labelValue) { 
    if (Math.abs(Number(labelValue)) >= 1.0e+9)
return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
      if (Math.abs(Number(labelValue)) >= 1.0e+6)
return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
      if (Math.abs(Number(labelValue)) >= 1.0e+3)
return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
}
// closing  converting function





fetch('https://api.flipsidecrypto.com/api/v2/queries/46d51bdd-ce5f-4e46-a0c8-b868b3059406/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,
    claimer:[...t.claimer,i.CLAIMER],
    op:[...t.op,i.OP] , 
    avg:[...t.avg,i.AVG]  ,
    median:[...t.median,i.MEDIAN] 

  }

},{claimer:[]
  ,op:[],avg:[],median:[]
})

document.getElementById("first-box").innerHTML = increment(data[0].CLAIMER)
document.getElementById("second-box").innerHTML = increment(data[0].OP)
document.getElementById("third-box").innerHTML = (Math.floor(data[0].MEDIAN)*10)/10
document.getElementById("fourth-box").innerHTML = (Math.floor(data[0].AVG)*10)/10


})








   
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
      name: 'Total OP Airdrop',
      type: 'bar',
      stack: 'total',
      color:['#FD4592'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[0,0,815100000]
    },
    {
      name: '#1 OP Airdroped',
      type: 'bar',
      stack: 'total',
      color:['#ED93B9'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[0,214700000]
    },
    {
      name: '#2 OP Airdroped',
      type: 'bar',
      stack: 'total',
      color:['#F0F23A'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[11740000,0]
    }
  ]
};
echarts.init(document.getElementById('chart1')).setOption(chart1);



fetch('https://api.flipsidecrypto.com/api/v2/queries/a0d9fadd-6833-4fc8-9c1e-1065592b3c20/data/latest').then(res=>res.json()).then(data=>{

  let selectedProps = data.reduce((acc, curr) => {
    let { WALLETS:value,TYPE:name } = curr;
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


