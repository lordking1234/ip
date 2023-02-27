

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
    orient: 'horizontal',
    left: 'left'
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['30%','70'],
      

            color: [
        '#a09f9f',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293'],
      data: [
        { value: 51.02, name: 'Community' },
        { value: 19, name: 'Core Contributors' },
        { value: 16.5, name: 'Foundation' },
        { value: 13.48, name: 'Investors' },

      ],
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
   echarts.init(document.getElementById('chart3')).setOption(chart3);

