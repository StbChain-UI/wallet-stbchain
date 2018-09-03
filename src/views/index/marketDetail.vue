<template>
    <div>
        <h1>K线图</h1>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script>
import F2 from '@antv/f2'
import axios from 'axios'
export default {
    name: 'MarketDetail',
    data (){
       return {
            //https://antv.alipay.com/assets/data/candle-sticks.json 接口
            chartData:[
                {"time":"2015-11-19","start":8.18,"max":8.33,"min":7.98,"end":8.32,"volumn":1810,"money":14723.56},
                {"time":"2015-11-18","start":8.37,"max":8.6,"min":8.03,"end":8.09,"volumn":2790.37,"money":23309.19},
                {"time":"2015-11-17","start":8.7,"max":8.78,"min":8.32,"end":8.37,"volumn":3729.04,"money":31709.71},
                {"time":"2015-11-16","start":8.18,"max":8.69,"min":8.05,"end":8.62,"volumn":3095.44,"money":26100.69},
                {"time":"2015-11-13","start":8.01,"max":8.75,"min":7.97,"end":8.41,"volumn":5815.58,"money":48562.37},
                {"time":"2015-11-12","start":7.76,"max":8.18,"min":7.61,"end":8.15,"volumn":4742.6,"money":37565.36},
                {"time":"2015-11-11","start":7.55,"max":7.81,"min":7.49,"end":7.8,"volumn":3133.82,"money":24065.42},
                {"time":"2015-11-10","start":7.5,"max":7.68,"min":7.44,"end":7.57,"volumn":2670.35,"money":20210.58},
                {"time":"2015-11-09","start":7.65,"max":7.66,"min":7.3,"end":7.58,"volumn":2841.79,"money":21344.36}
            ]
       }
    },
    mounted(){
        this.$axios.get('/assets/data/candle-sticks.json').then((res)=>{
            console.log(res);
        })
        let list  = this.chartData.slice(0, 50); // 仅显示100 个
        list.sort(function(obj1, obj2) {
            return obj1.time > obj2.time ? 1 : -1;
        });
        list.forEach(function(obj) {
            obj.range = [obj.start, obj.end, obj.max, obj.min];
            obj.trend = obj.start <= obj.end ? 0 : 1;
        });

        // Step 1: 创建 Chart 对象
        const chart = new F2.Chart({
            id: 'myChart',
            pixelRatio: window.devicePixelRatio // 指定分辨率
        });

        console.log(chart);
        chart.axis('time', {
            label: function label(text, index, total) {
            var cfg = {
                textAlign: 'center'
            };
            // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
            if (index === 0) {
                cfg.textAlign = 'start';
            }
            if (index > 0 && index === total - 1) {
                cfg.textAlign = 'end';
            }
            return cfg;
            }
        });

        chart.source(list, {
            range: {
                tickCount: 5
            },
            time: {
                tickCount: 3
            }
        });

        chart.legend({
            custom: true,
            itemWidth: null,
            items: [{
                name: '上涨',
                marker: 'circle',
                fill: '#FC674D'
            }, {
                name: '下降',
                marker: 'circle',
                fill: '#9AC2AB'
            }]
        });

        chart.tooltip(false);
        chart.schema().position('time*range').color('trend', function(trend) {
            return ['#FC674D', '#fff'][trend];
        }).shape('candle').style('trend', {
            stroke: function stroke(val) {
                if (val === 1) {
                    return '#9AC2AB';
                }
            }
        });
        chart.render();
    }
}
</script>

