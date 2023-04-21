<!-- 折线图 -->
<template>
    <div class='lineChart_left_center_box'>
        <dv-border-box-10>
            <div class="panel line">
                <h2>
                    折线图-人员变化
                    <a @click="cutYear('0')" :class="{ active : isActive }" href="javascript:;">2020</a>
                    <a @click="cutYear('1')" :class="{ active: !isActive }" href="javascript:;">2021</a></h2>
                <div ref="line1_chart" class="chart"></div>
            </div>
        </dv-border-box-10>
    </div>
</template>

<script>
    //import 组件名称 from '路径';
    import * as echarts from "echarts";
    export default {
        //import引入的组件需要注入到对象中才能使用
        name: '',
        components: {},
        data() {
            return {
                isActive: true,
                myCharts: null,
                // 年份对应数据
                yearData: [{
                    year: "2020", // 年份
                    data: [
                        // 两个数组是因为有两条线
                        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
                    ]
                },
                {
                    year: "2021", // 年份
                    data: [
                        // 两个数组是因为有两条线
                        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
                    ]
                }]       
            };
        },
        created() {
            
        },
        mounted() {
            this.initEcharts()
        },
       
        methods: {
            initEcharts () { 

                this.myChart = echarts.init(this.$refs.line1_chart);
                this.myChart.setOption({
                    // 修改两条线的颜色
                    color: ['#00f2f1', '#ed3f35'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    // 图例组件
                    legend: {
                        // 当serise 有name值时， legend 不需要写data
                        // 修改图例组件文字颜色
                        textStyle: {
                            color: '#4c9bfd'
                        },
                        right: '10%',
                    },
                    grid: {
                        top: "20%",
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true,
                        show: true, // 显示边框
                        borderColor: '#012f4a' // 边框颜色
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false, // 去除轴间距
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        // 去除刻度线
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: "#4c9bfb" // x轴文本颜色
                        },
                        axisLine: {
                            show: false // 去除轴线
                        }
                    },
                    yAxis: {
                        type: 'value',
                        // 去除刻度线
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: "#4c9bfb" // x轴文本颜色
                        },
                        axisLine: {
                            show: false // 去除轴线
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#012f4a"
                            }
                        }
                    },
                    series: [{
                        type: 'line',
                        smooth: true, // 圆滑的线
                        name: '新增粉丝',
                        data: this.yearData[0].data[0]
                    },
                    {
                        type: 'line',
                        smooth: true, // 圆滑的线
                        name: '新增游客',
                        data: this.yearData[0].data[1]
                    }]

                })
                window.addEventListener('resize', () => {
                    this.myChart.resize();
                })
            },
            //切换年
            cutYear (index) {
                if (index == '0') {
                    this.isActive = true;
                } else {
                     this.isActive = false;
                }
                
                let obj = this.yearData[index];
                let option = this.myChart.getOption() // 获取option数据
                option.series[0].data = obj.data[0];
                option.series[1].data = obj.data[1];

                 // 需要重新渲染
                this.myChart.setOption(option,true);
                
            }
        }
        //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style scoped>

</style>