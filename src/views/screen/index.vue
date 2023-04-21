<!--  -->
<template>
    <div class='screenBox'>
        <dv-full-screen-container>
            <!-- 头部 -->
            <Header></Header>

            <div class="mainbox">
                <!-- 左侧盒子 -->
                <div class="column">
                    <!-- 左上 -->
                    <HistogramLeftTop></HistogramLeftTop>
                    <!-- 左中 -->
                    <LineChartLeftCenter></LineChartLeftCenter>
                    <!-- 左下 -->
                    <PieChartLeftBottom></PieChartLeftBottom>>
                </div>
                <!-- 中间盒子 -->
                <div class="column">
                    <!-- 头部 no模块 -->
                    <div class="no">
                        <div class="no-hd">
                            <ul>
                                <li>97222</li>
                                <li>85723</li>
                            </ul>
                        </div>
                        <div class="no-bd">
                            <ul>
                                <li>就业人数</li>
                                <li>供应人数</li>
                            </ul>
                        </div>
                    </div>
                    <!-- map模块 -->

                     <!-- 中间地图 -->
                     <MapEcharts></MapEcharts>
                </div>

                <!-- 右侧盒子 -->
                <div class="column">
                     <!-- 右上 -->
                    <HistogramRightTop></HistogramRightTop>
                    <!-- 右中 -->
                    <LineChartRightCenter></LineChartRightCenter>
                    <!-- 右下 -->
                    <PieChartRightBottom></PieChartRightBottom>
                </div>
            </div>
        </dv-full-screen-container>
    </div>
</template>

<script>
import * as echarts from "echarts";
import china from '@/assets/json/china.json'
import Header from '@/components/header'

import HistogramLeftTop from '@/components/histogram_left_top'
import LineChartLeftCenter from '@/components/lineChart_left_center'
import PieChartLeftBottom from '@/components/pieChart_left_bottom';

import HistogramRightTop from '@/components/histogram_right_top'
import LineChartRightCenter from '@/components/lineChart_right_center'
import PieChartRightBottom from '@/components/pieChart_right_bottom'

import MapEcharts from '@/components/map_echarts'
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'Screen',
    components: {
        Header,

        HistogramLeftTop,
        LineChartLeftCenter,
        PieChartLeftBottom,

        HistogramRightTop,
        LineChartRightCenter,
        PieChartRightBottom,

        MapEcharts    
        },
        data() {
            return {
                
            };
        },
        created() {
            
        },
        mounted() {
            
        },
        computed: {},
        watch: {},
        methods: {
            
        }
        //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style scoped>

</style>