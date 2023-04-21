<!-- 左上柱形图 -->
<template>
    <div class='histogram_left_top_box'>
         <dv-border-box-8>
            <div class="panel bar">
                <h2>柱折图-气温和降水量</h2>
                <!-- 图表放置盒子 -->
                <div ref="bar1_chart" class="chart"></div>
            </div>
        </dv-border-box-8>
    </div>
</template>

<script>
    import * as echarts from "echarts";
    export default {
        name: '',
        data() {
            return {
                myCharts: null,
            };
        },
        created() {
            
        },
        mounted() {
            this.initEcharts()
        },
        methods: {
            initEcharts () {
                this.myChart = echarts.init(this.$refs.bar1_chart);
                this.myChart.setOption({
                    color: ['#2f89cf'],
                    // 提示 tooltip提示  trigger触发器 axis轴线触发，item 当前项触发
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'cross' }
                    },
                    // 图例
                    legend: {
                        top: "0%",
                        textStyle: {
                            color: "rgba(255,255,255,.5)",
                            fontSize: "12"
                        }
                    },
                    grid: {
                        top: '30',
                        left: '10',
                        right: '30',
                        bottom: '10',
                        containLabel: true
                    },
                    // x轴线
                    xAxis: [{
                        type: 'category',
                        //刻度axisTick  -刻度线的长度，样式
                        axisTick: {
                            alignWithLabel: true,
                            // length: 6,
                            // lineStyle: {
                            //     type: 'dashed'
                            //     // ...
                            // }
                        },
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }],
                    // y轴线 --两个y轴
                    yAxis: [{
                        type: 'value',
                        name: '降水量',
                        min: 0,
                        max: 250,
                        position: 'right',
                        // 刻度标签axisLabel -文字对齐方式，自定义刻度标签内容
                        axisLabel: {
                            formatter: '{value} ml',
                           
                        }
                    },
                    {
                        type: 'value',
                        name: '温度',
                        min: 0,
                        max: 25,
                        position: 'left',
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }],
                    series: [{
                        name: '降水量',
                        type: 'bar',
                        yAxisIndex: 0,
                        data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
                    },
                    {
                        name: '温度',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        data: [6.0, 10.2, 10.3, 11.5, 10.3, 13.2, 14.3, 16.4, 18.0, 16.5, 12.0, 5.2]
                    }]
                })
                window.addEventListener('resize', () => {
                    this.myChart.resize();
                })
            }
        }
        //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style scoped>

</style>