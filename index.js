function increment(labelValue) { 
  if (Math.abs(Number(labelValue)) >= 1.0e+9)
return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
    if (Math.abs(Number(labelValue)) >= 1.0e+6)
return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
    if (Math.abs(Number(labelValue)) >= 1.0e+3)
return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
}




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

})








fetch('https://api.flipsidecrypto.com/api/v2/queries/9ea90485-b4a3-4b25-8428-49012324d477/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,
    date:[...t.date,i.DATE],
    tvl:[...t.tvl,i.TVL_USD]
  }

},{date:[],tvl:[],fee:[],gas:[]})


chart2 = {
  xAxis: {
    type: 'category',
    data: newData.date
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: newData.tvl,
      type: 'line',
      color :'#2e3a46' ,
      smooth: true
    }
  ]
};
echarts.init(document.getElementById('sixth-box')).setOption(chart2);

})



fetch('https://api.flipsidecrypto.com/api/v2/queries/ed191a52-2fa3-49af-a3a2-3e770c85bd78/data/latest').then(res=>res.json()).then(data=>{
  let selectedProps = data.reduce((acc, curr) => {
    let { TVL_USD:value,CHAIN:name } = curr;
    return [...acc, { value,name }];
  }, []);

  

chart3 = {
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
      label: {  show: true
      },

      color: [
        '#fb7293',
        '#ca6666',
       '#d37f7f',
       '#db9999',
       '#e4b2b2',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293'],
      radius: ['50%','10'],
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
      };


echarts.init(document.getElementById('fifth-box')).setOption(chart3);

})








