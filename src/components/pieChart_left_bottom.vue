<!-- 饼状图 -->
<template>
    <div class='pieChart_left_bottom_box'>
        <dv-border-box-8 :reverse="true">
            <div class="panel pie">
                <h2>锥形柱图-年龄分布</h2>
                <div ref="pie1_chart" class="chart">
                    <dv-conical-column-chart :config="config" style="width:90%;height:90%;margin-left: 5%;" />
                </div>
            </div>
        </dv-border-box-8>   
    </div>
</template>

<script>
   
    export default {
        //import引入的组件需要注入到对象中才能使用
        name: '',
        components: {},
        data() {
            return {
                config: {
                    data: [
                        { name: '老年', value: 90 },
                        { name: '中年', value: 120 },
                        { name: '青年', value: 200 },
                        { name: '少年', value: 150 },
                        { name: '幼儿', value: 130 },
                        { name: '婴儿', value: 100 }
                    ],
                    img: [
                        require('../assets/images/people.png'),
                        require('../assets/images/people.png'),
                        require('../assets/images/people.png'),
                        require('../assets/images/people.png'),
                        require('../assets/images/people.png'),
                        require('../assets/images/people.png')
                    ],
                    showValue: true
               }
            };
        },
        created() {
            
        },
        mounted() {
           
        },
        methods: {
            
        }
        //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style scoped>

</style>