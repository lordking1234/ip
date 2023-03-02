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

fetch('https://api.geniidata.com/lordking/api/v1/datasource/12587/results?limit=500&offset=0', {
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
      dates:[...t.dates,i.date].filter((v, i, a) => a.indexOf(v) === i), 
      souffl3_aptoss:[...t.souffl3_aptoss,i.source_marketplace==="souffl3" ? i.tx_count : null].filter(item => item !== null), 
      Topazs:[...t.Topazs,i.source_marketplace==="Topaz" ? i.tx_count : null].filter(item => item !== null), 
      Rares:[...t.Rares,i.source_marketplace==="Its Rare" ? i.tx_count : null].filter(item => item !== null) ,
      Blues:[...t.Blues,i.source_marketplace==="Blue Move" ? i.tx_count : null].filter(item => item !== null) ,
      Seashrines:[...t.Seashrines,i.source_marketplace==="Seashrine" ? i.tx_count : null].filter(item => item !== null) ,

      souffl3_aptost:[...t.souffl3_aptost,i.source_marketplace==="souffl3" ? Math.round(i.total_aptos) : null].filter(item => item !== null), 
      Topazt:[...t.Topazt,i.source_marketplace==="Topaz" ?  Math.round(i.total_aptos ): null].filter(item => item !== null), 
      Raret:[...t.Raret,i.source_marketplace==="Its Rare" ? Math.round(i.total_aptos) : null].filter(item => item !== null) ,
      Bluet:[...t.Bluet,i.source_marketplace==="Blue Move" ? Math.round(i.total_aptos) : null].filter(item => item !== null) ,
      Seashrinet:[...t.Seashrinet,i.source_marketplace==="Seashrine" ? Math.round(i.total_aptos) : null].filter(item => item !== null)  ,
      souffl3_aptosw:[...t.souffl3_aptosw,i.source_marketplace==="souffl3" ? Math.round(i.total_aptos) : null].filter(item => item !== null), 

      Topazw:[...t.Topazw,i.source_marketplace==="Topaz" ? i.buyers : null].filter(item => item !== null), 
      Rarew:[...t.Rarew,i.source_marketplace==="Its Rare" ? i.buyers : null].filter(item => item !== null) ,
      Bluew:[...t.Bluew,i.source_marketplace==="Blue Move" ? i.buyers : null].filter(item => item !== null) ,
      Seashrinew:[...t.Seashrinew,i.source_marketplace==="Seashrine" ? i.buyers : null].filter(item => item !== null) ,


      Topazz:[...t.Topazz,i.source_marketplace==="Topaz" ? i.nft_sold_count : null].filter(item => item !== null), 
      Rarez:[...t.Rarez,i.source_marketplace==="Its Rare" ? i.nft_sold_count : null].filter(item => item !== null) ,
      Bluez:[...t.Bluez,i.source_marketplace==="Blue Move" ? i.nft_sold_count : null].filter(item => item !== null) ,
      Seashrinez:[...t.Seashrinez,i.source_marketplace==="Seashrine" ? i.buyers : null].filter(item => item !== null) ,

      Topazx:[...t.Topazx,i.source_marketplace==="Topaz" ? i.collection_number : null].filter(item => item !== null), 
      Rarex:[...t.Rarex,i.source_marketplace==="Its Rare" ? i.collection_number : null].filter(item => item !== null) ,
      Bluex:[...t.Bluex,i.source_marketplace==="Blue Move" ? i.collection_number : null].filter(item => item !== null) ,
      Seashrinex:[...t.Seashrinex,i.source_marketplace==="Seashrine" ? i.collection_number : null].filter(item => item !== null)
    }
    
    },{dates:[],souffl3_aptoss:[],Rares:[],Topazs:[],Blues:[],Seashrines:[],
      souffl3_aptost:[],Raret:[],Topazt:[],Bluet:[],Seashrinet:[] ,
      souffl3_aptosw:[],Rarew:[],Topazw:[],Bluew:[],Seashrinew:[] ,
      souffl3_aptosz:[],Rarez:[],Topazz:[],Bluez:[],Seashrinez:[] ,
      souffl3_aptosx:[],Rarex:[],Topazx:[],Bluex:[],Seashrinex:[]


    })



       //-----------------------------------------------------------------------------------------


        var chart000 = {
          series: [{
            name: 'Blue Move',
            data: newss.Blues ,
            type: 'column'
          
          }, {
            name: 'Rare',
            data: newss.Rares,
            type: 'column'
          }, {
            name: 'souffl3',
            data: newss.souffl3_aptoss,
            type: 'column'
          }, {
            name: 'Topaz',
            data: newss.Topazs,
            type: 'column'
          }, {
            name: 'Seashrine',
            data: newss.Seashrines,
            type: 'column'
          }],theme: {
            palette: 'palette4' // upto palette10
          },
          chart: {
          height: 350,
          type: 'line',
          stacked: true
          },
          stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
          },
          plotOptions: {
          bar: {
            columnWidth: '50%'
          }
          },
          
          fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
          },
          labels: newss.dates,
          markers: {
          size: 0
          },
          xaxis: {
          type: 'datetime'
          },
          yaxis: {
          title: {
            text: 'Transactions',
          },
          min: 0
          },
          tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " Transactions";
              }
              return y;
          
            }
          }
          }
          };
      var chart = new ApexCharts(document.getElementById("chart000"), chart000);
      chart.render();



      //-----------------------------------------------------------------------------------------



      var chart1 = {
        series: [{
          name: 'Blue Move',
          data: newss.Bluet ,
          type: 'column'
        
        }, {
          name: 'Rare',
          data: newss.Raret,
          type: 'column'
        }, {
          name: 'souffl3',
          data: newss.souffl3_aptost,
          type: 'column'
        }, {
          name: 'Topaz',
          data: newss.Topazt,
          type: 'column'
        }, {
          name: 'Seashrine',
          data: newss.Seashrinet,
          type: 'column'
        }],theme: {
          palette: 'palette4' // upto palette10
        },
        chart: {
        height: 350,
        type: 'line',
        stacked: false
        },
        stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
        },
        plotOptions: {
        bar: {
          columnWidth: '50%'
        }
        },
        
        fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
        },
        labels: newss.dates,
        markers: {
        size: 0
        },
        xaxis: {
        type: 'datetime'
        },
        yaxis: {
        title: {
          text: 'Aptos',
        },
        min: 0
        },
        tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " Aptos";
            }
            return y;
        
          }
        }
        }
        };
  var chart = new ApexCharts(document.getElementById("chart1"), chart1);
  chart.render();


      //-----------------------------------------------------------------------------------------


  var chart2 = {
    series: [{
      name: 'Blue Move',
      data: newss.Bluew ,
      type: 'column'
    
    }, {
      name: 'Rare',
      data: newss.Rarew,
      type: 'column'
    }, {
      name: 'souffl3',
      data: newss.souffl3_aptosw,
      type: 'column'
    }, {
      name: 'Topaz',
      data: newss.Topazw,
      type: 'column'
    }, {
      name: 'Seashrine',
      data: newss.Seashrinew,
      type: 'column'
    }],theme: {
      palette: 'palette4' // upto palette10
    },
    chart: {
    height: 350,
    type: 'line',
    stacked: false
    },
    stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
    },
    plotOptions: {
    bar: {
      columnWidth: '50%'
    }
    },
    
    fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
    },
    labels: newss.dates,
    markers: {
    size: 0
    },
    xaxis: {
    type: 'datetime'
    },
    yaxis: {
    title: {
      text: 'Buyers',
    },
    min: 0
    },
    tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " Buyers";
        }
        return y;
    
      }
    }
    }
    };
var chart = new ApexCharts(document.getElementById("chart2"), chart2);
chart.render();


      //-----------------------------------------------------------------------------------------




      var chart0= {
        series: [{
          name: 'Blue Move',
          data: newss.Bluez ,
          type: 'column'
        
        }, {
          name: 'Rare',
          data: newss.Rarez,
          type: 'column'
        }, {
          name: 'souffl3',
          data: newss.souffl3_aptosz,
          type: 'column'
        }, {
          name: 'Topaz',
          data: newss.Topazz,
          type: 'column'
        }, {
          name: 'Seashrine',
          data: newss.Seashrinez,
          type: 'column'
        }],theme: {
          palette: 'palette4' // upto palette10
        },
        chart: {
        height: 350,
        type: 'line',
        stacked: false
        },
        stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
        },
        plotOptions: {
        bar: {
          columnWidth: '50%'
        }
        },
        
        fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
        },
        labels: newss.dates,
        markers: {
        size: 0
        },
        xaxis: {
        type: 'datetime'
        },
        yaxis: {
        title: {
          text: 'NFT Traded',
        },
        min: 0
        },
        tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " NFT Traded";
            }
            return y;
        
          }
        }
        }
        };
  var chart = new ApexCharts(document.getElementById("chart0"), chart0);
  chart.render();






//------------------------------------------------------------------------------------------


  var chart00= {
    series: [{
      name: 'Blue Move',
      data: newss.Bluex ,
      type: 'column'
    
    }, {
      name: 'Rare',
      data: newss.Rarex,
      type: 'column'
    }, {
      name: 'souffl3',
      data: newss.souffl3_aptosx,
      type: 'column'
    }, {
      name: 'Topaz',
      data: newss.Topazx,
      type: 'column'
    }, {
      name: 'Seashrine',
      data: newss.Seashrinex,
      type: 'column'
    }],theme: {
      palette: 'palette4' // upto palette10
    },
    chart: {
    height: 350,
    type: 'line',
    stacked: false
    },
    stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
    },
    plotOptions: {
    bar: {
      columnWidth: '50%'
    }
    },
    
    fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
    },
    labels: newss.dates,
    markers: {
    size: 0
    },
    xaxis: {
    type: 'datetime'
    },
    yaxis: {
    title: {
      text: 'NFT Collection',
    },
    min: 0
    },
    tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " NFT Collection";
        }
        return y;
    
      }
    }
    }
    };
var chart = new ApexCharts(document.getElementById("chart00"), chart00);
chart.render();



})



//------------------------------------------------------------


fetch('https://api.geniidata.com/lordking/api/v1/datasource/12588/results?limit=20&offset=0', {
  method: 'GET', 
  headers: {
      'Content-Type': 'application/json',
      'api-key': 'a94fdce0-b66c-11ed-9d24-019c684cbdd6'
  }
}).then(res=>res.json()).then(data=>{
  let selectedProps = data.data.list.reduce((acc, curr) => {
    let { buyers:value,collection:name } = curr;
    return [...acc, { value,name }];
  }, []);

  

  chart11 = {
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
      label: {  show: false
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


echarts.init(document.getElementById('chart11')).setOption(chart11);

})






fetch('https://api.geniidata.com/lordking/api/v1/datasource/12589/results?limit=20&offset=0', {
  method: 'GET', 
  headers: {
      'Content-Type': 'application/json',
      'api-key': 'a94fdce0-b66c-11ed-9d24-019c684cbdd6'
  }
}).then(res=>res.json()).then(data=>{
  let selectedProps = data.data.list.reduce((acc, curr) => {
    let { tx_count:value,collection:name } = curr;
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
      label: {  show: false
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


echarts.init(document.getElementById('chart22')).setOption(chart22);

})