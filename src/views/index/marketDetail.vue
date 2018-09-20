<template>
    <div>
        <h2>K线图</h2>
        <canvas id="myChart" style="width:100%;height:auto;"></canvas>
        <div class="tool-tip">

        </div>
    </div>
</template>

<script>
import F2 from '@antv/f2';
import {Apis} from "bitsharesjs-ws";``
var {ChainStore} = require("bitsharesjs");
import {price} from 'bitsharesjs/dist/serializer/src/operations.js';
const ScrollBar = require('@antv/f2/lib/plugin/scroll-bar');

console.log(price);
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
        var chainID = '4018d7844c78f6a6c41c6a552b898022310fc5dec06da467ee7905a8dad512c8';
        var el_chart = document.getElementById('myChart');
        var tool_tip = document.getElementsByClassName('tool-tip')[0];
        var canvasTop = el_chart.offsetTop;
        var canvasLeft = el_chart.offsetLeft;
        var canvasHeight = el_chart.offsetHeight;
        let list  = this.chartData.slice(0, 50); // 仅显示100 个
        var ma5 = 0;
        list.sort(function(obj1, obj2) {
            return obj1.time > obj2.time ? 1 : -1;
        });
        list.forEach(function(obj) {
            obj.range = [obj.start, obj.end, obj.max, obj.min];
            obj.trend = obj.start <= obj.end ? 0 : 1;
        });
        console.log(list);
        for(var i=0;i<list.length;i++){
            if(i>=4){
                for(let j=0;j<5;j++){
                    ma5 += list[i-j].end
                }
                list[i].ma5 = ma5/5;
                ma5 = 0;
            }
        }
        // Step 1: 创建 Chart 对象
        const chart = new F2.Chart({
            id: 'myChart',
            pixelRatio: window.devicePixelRatio, // 指定分辨率
            plugins: ScrollBar
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

        chart.axis('range', {
            position: 'right'
        });
        chart.axis('ma5', false);

        chart.source(list, {
            range: {
                tickCount: 5
            },
            time: {
                tickCount: 3
            },
            ma5:{
                tickCount: 5
            }
        });

        chart.legend(false);

        chart.schema().position('time*range').color('trend',function(trend) {
            return ['#FC674D', '#53b987'][trend];
        }).shape('candle');

        chart.tooltip({
            alwaysShow: true,
            showCrosshairs: true,
            crosshairsStyle: {
                stroke: 'rgba(220,220,220,.7)'
            },
            showTooltipMarker: true,
            custom: true,
            onShow: function onShow(ev){
                var items = ev.items;
                var Data = items[0];
                var el_date = null;
                console.log(items)
                tool_tip.innerHTML = '\
                \<span class="on-date" style="position:absolute;white-space:nowrap;background:rgba(225,225,225,.3);padding:0 3px;">'+Data.title+'</span><span>开=<em>'+Data.origin.start+'</em></span>&ensp;<span>高='+Data.origin.max+'</span>&ensp;<span>低='+Data.origin.min+'</span>&ensp;<span>收='+Data.origin.end+'</span>\
                '
                el_date = document.getElementsByClassName('on-date')[0];
                tool_tip.style.opacity = 1;
                tool_tip.style.top = canvasTop + 'px';
                el_date.style.top = canvasHeight - el_date.offsetHeight + 'px';
                el_date.style.left = Data.x - 8 - el_date.offsetWidth/2 +  'px';
            }
        });

        chart.line().position('time*ma5').shape('smooth').color('#FC674D');
        chart.point().position('time*ma5').size('2').color('#FC674D');

        //chart.line().position('time*range');

        chart.scrollBar({
            mode: 'x',
            xStyle: {
                offsetY: 2
            }
        });
        chart.render();

        console.log(Apis.instance().history_api().exec('get_market_history',['1.3.113']))
    }
}
</script>

<style lang="less" scoped>
.tool-tip{
    font-size:0.8rem;
    font-weight:300;
    color:#fff;
    position: absolute;
    background: rgba(22,22,22,.7);
    border-radius: 2px;
    left: 10px;
    max-width: 98%;
    padding:2px 8px;
    opacity: 0;
}

</style>