<!-- 中间地图 -->
<template>
    <div class='map_echarts_box'>
        <div class="map">
            <div class="map1"></div>
            <div class="map2"></div>
            <div class="map3"></div>
            <div ref="map_chart" class="chart" style="height: 10.125rem; width: 100%;"></div>
        </div>
    </div>
</template>

<script>
import * as echarts from "echarts";
import china from '@/assets/json/china.json'
import geoCoordMap from "@/assets/js/china_main_city_map.js";
    export default {
        //import引入的组件需要注入到对象中才能使用
        name: '',
        components: {},
        data() {
            return {
                myCharts: null,
                XAData: [
                    [{ name: '拉萨' }, { name: '北京', value: 100 }],
                    [{ name: '拉萨' }, { name: '广州', value: 100 }],
                    [{ name: '拉萨' }, { name: '乌鲁木齐', value: 100 }],
                    [{ name: '拉萨' }, { name: '杭州', value: 100 }]
                ],
                XNData: [
                    [{ name: '杭州' }, { name: '北京', value: 100 }],
                    [{ name: '杭州' }, { name: '广州', value: 100 }],
                    [{ name: '杭州' }, { name: '西安', value: 100 }],
                    [{ name: '杭州' }, { name: '成都', value: 100 }],
                    [{ name: '杭州' }, { name: '拉萨', value: 100 }],
                     
                    [{ name: '成都' }, { name: '西宁', value: 100 }],
                    [{ name: '成都' }, { name: '哈尔滨', value: 100 }],
                    [{ name: '成都' }, { name: '乌鲁木齐', value: 100 }]
                   
                ],
                //飞机SVG图形
                planePath: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',

            };
        },
        created() {
            
        },
        mounted() {
             this.initEcharts()
        },
        computed: {},
        watch: {},
        methods: {
            initEcharts () {
                this.myChart = echarts.init(this.$refs.map_chart);
                echarts.registerMap('china', china);
                this.myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params, ticket, callback) {
                            if (params.seriesType == "effectScatter") {
                                return "线路：" + params.data.name + "" + params.data.value[2];
                            } else if (params.seriesType == "lines") {
                                return params.data.fromName + "=>" + params.data.toName + "<br />" + params.data.value;
                            } else {
                                return params.name;
                            }
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        top: 'bottom',
                        left: 'right',
                        data: ['拉萨', '杭州'],
                        textStyle: {
                            color: '#fff'
                        },
                        selectedMode: 'multiple'
                    },
                    geo: {
                        map: 'china',
                        // 把地图放大1.2倍
                        zoom: 1.2,
                        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。开启缩放'scale'，开启平移'move'。设置成 true 为都开启
                        scaleLimit: { // 滚轮缩放的缩放比例，默认的缩放为1
                            min: 1,  // 最小的缩放值
                            max: 2,  // 最大的缩放值
                        },
                        //在容器中的位置
                        top: '25%',
                        left: 'center',
                        label: {
                            // 鼠标移动显示区域名称
                            emphasis: {
                                show: true,
                                color: '#fff'
                            }
                        },
                        // 地图样式修改
                        itemStyle: {
                            normal: {
                                areaColor: 'rgba(34, 70, 168, 0.7)',
                                borderColor: '#0692a4'
                            },
                            emphasis: {
                                areaColor: 'rgba(119, 139, 224, 0.548)'
                            }
                        }
                    },
                    series: this.seriesData()
                })
                window.addEventListener('resize', () => {
                    this.myChart.resize();
                })
            },
            //数组整合
            convertData (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {

                    var dataItem = data[i];

                    var fromCoord = geoCoordMap[dataItem[0].name]; //出发坐标
                    var toCoord = geoCoordMap[dataItem[1].name]; //到达坐标
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[0].name,
                            toName: dataItem[1].name,
                            coords: [fromCoord, toCoord],
                            value: dataItem[1].value
                        });
                    }
                }
                console.log(res,'res')
                return res;
            },
            //series整合
            seriesData () {
                let data = [['拉萨', this.XAData], ['杭州', this.XNData]];
                let color = ['#a6c84c', '#ffa022', '#46bee9']; //航线的颜色
                let series = [];
                data.forEach( (item, i) => {
                    series.push(
                        {
                            name: item[0],
                            type: 'lines', //lines路径图跟line区别，line是折线图
                            zlevel: 1,  //zlevel用于 Canvas 分层,zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。
                            effect: {  // 线特效的配置  注意： 所有带有尾迹特效的图表需要单独放在一个层，也就是需要单独设置 zlevel，同时建议关闭该层的动画（animation: false）。不然位于同个层的其它系列的图形，和动画的标签也会产生不必要的残影。
                                show: true,  //是否显示特效
                                period: 6,  // 特效动画的时间，单位为 s。
                                trailLength: 0.7, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
                                color: 'red', //特效标记的颜色 arrow箭头的颜色
                                symbolSize: 3 // 特效标记的大小
                            },
                            lineStyle: { // 线的颜色
                                normal: {
                                    color: color[i], // 线的颜色
                                    width: 0, // 线宽
                                    curveness: 0.2 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
                                }
                            },
                            data: this.convertData(item[1])
                        },
                        {
                            name: item[0],
                            type: 'lines', //lines路径图跟line区别，line是折线图
                            zlevel: 2,
                            symbol: ['none', 'arrow'], //线两端的标记类型，可以是一个数组分别指定两端
                            symbolSize: 10, //线两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指
                            effect: {  // 线特效的配置  注意： 所有带有尾迹特效的图表需要单独放在一个层，也就是需要单独设置 zlevel，同时建议关闭该层的动画（animation: false）。不然位于同个层的其它系列的图形，和动画的标签也会产生不必要的残影。
                                show: true,   //是否显示特效
                                period: 6,   // 特效动画的时间，单位为 s。
                                trailLength: 0,  // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
                                symbol: this.planePath,  // 特效图形的标记这里用的svg飞机图形
                                symbolSize: 15  // 特效标记的大小
                            },
                            lineStyle: { // 线的颜色
                                normal: {
                                    color: color[i], // 线的颜色
                                    width: 1, // 线宽
                                    opacity: 0.6, //图形透明度
                                    curveness: 0.2 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
                                }
                            },
                            data: this.convertData(item[1])
                        },
                        {
                            name: item[0],
                            type: 'effectScatter',  // 带有涟漪特效动画的散点（气泡）图
                            coordinateSystem: 'geo', // 该系列使用的坐标系,geo 使用地理坐标系
                            zlevel: 2,
                            rippleEffect: {  // 涟漪特效相关配置
                                brushType: 'stroke' // 波纹的绘制方式 可选 'stroke' 和 'fill'
                            },
                            label: { // 图形上的文本标签
                                normal: {
                                    show: true,
                                    position: 'right', // 标签的位置
                                    formatter: '{b}'  // 标签内容格式器 {b}：数据名
                                }
                            },
                            symbolSize: function (val) {  // 标记的大小
                                return val[2] / 8;
                            },
                            itemStyle: {  // 图形样式
                                normal: {
                                    color: color[i], // 图形的颜色
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            data: item[1].map(function (dataItem) {
                                return {
                                    name: dataItem[1].name,
                                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                                };
                            })
                        }
                    )
                }) 

                return series
            }
        }
        //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style scoped>

</style>