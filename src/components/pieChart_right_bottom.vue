<!-- 右下饼图 -->
<template>
    <div class='pieChart_right_bottom_box'>
        <dv-border-box-12>
            <div class="panel pie2">
                <h2>饼形图-地区分布</h2>
                <div ref="pie2_chart" class="chart"></div>
            </div>
        </dv-border-box-12>
    </div>
</template>

<script>
    import * as echarts from "echarts";
    export default {
        name: '',
        components: {},
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
                this.myChart = echarts.init(this.$refs.pie2_chart);
                this.myChart.setOption({
                    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        bottom: 0,
                        itemWidth: 10,
                        itemHeight: 10,
                        textStyle: {
                            color: "rgba(255,255,255,.5)",
                            fontSize: 10
                        }
                    },
                    series: [{
                        name: '地区分布',
                        type: 'pie',
                        radius: ["10%", "60%"],
                        center: ['50%', '40%'],
                        // 半径模式  area面积模式
                        roseType: 'radius',
                        // 图形的文字标签
                        label: {
                            fontsize: 10
                        },
                        // 引导线调整
                        labelLine: {
                            // 连接扇形图线长(斜线)
                            length: 6,
                            // 连接文字线长(横线)
                            length2: 8
                        },
                        data: [
                            { value: 26, name: '北京' },
                            { value: 24, name: '山东' },
                            { value: 25, name: '河北' },
                            { value: 20, name: '江苏' },
                            { value: 25, name: '浙江' },
                            { value: 30, name: '四川' },
                            { value: 42, name: '湖北' }
                        ]
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