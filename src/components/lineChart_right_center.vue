<!-- 右中折线图 -->
<template>
    <div class='lineChart_right_center_box'>   
        <dv-border-box-6>
            <div class="panel line2">
                <h2>折线图-播放量</h2>
                <div ref="line2_chart" class="chart"></div>
            </div>
        </dv-border-box-6>
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
                this.myChart = echarts.init(this.$refs.line2_chart);
                this.myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                    },
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
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: 12
                            }
                        },
                        // x轴线的颜色为   rgba(255,255,255,.2)
                        axisLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.2)"
                            }
                        },
                        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
                    }],
                     yAxis: [{
                        type: 'value',
                        axisTick: {
                            // 不显示刻度线
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: 12
                            }
                        },
                        // 修改分割线的颜色
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)"
                            }
                        }
                    }],
                    series: [{
                        name: '邮件营销',
                        type: 'line',
                        smooth: true, // 圆滑的线
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#0184d5",
                            width: 2
                        },
                        // 填充区域渐变透明颜色
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                                }
                            ], false),
                            shadowColor: "rgba(0, 0, 0, 0.1)"
                        },
                        // 拐点设置为小圆点
                        symbol: 'circle',
                        // 设置拐点大小
                        symbolSize: 5,
                        // 开始不显示拐点， 鼠标经过显示
                        showSymbol: false,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: "#0184d5",
                            borderColor: "rgba(221, 220, 107, .1)",
                            borderWidth: 12
                        },
                        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
                    },
                    {
                        name: "转发量",
                        type: "line",
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "#00d887",
                                width: 2
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgba(0, 216, 135, 0.4)"
                                    },
                                    {
                                        offset: 0.8,
                                        color: "rgba(0, 216, 135, 0.1)"
                                    }
                                ],false),
                                shadowColor: "rgba(0, 0, 0, 0.1)"
                            }
                        },
                        // 设置拐点 小圆点
                        symbol: "circle",
                        // 拐点大小
                        symbolSize: 5,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: "#00d887",
                            borderColor: "rgba(221, 220, 107, .1)",
                            borderWidth: 12
                        },
                        // 开始不显示拐点， 鼠标经过显示
                        showSymbol: false,
                        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
                    }]      
                });
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