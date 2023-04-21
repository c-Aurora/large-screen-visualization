<!-- 右上柱形图 -->
<template>
    <div class='histogram_right_top_box'>
        <dv-border-box-1>
            <div class="panel bar2">
                <h2>柱形图-就业行业</h2>
                <div class="chart">
                    <dv-scroll-ranking-board :config="config" style="width:90%;height:90%;margin-left: 5%;" />
                </div>
            </div>
        </dv-border-box-1>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data() {
            return {
                config: {
                    data: [
                        {name: 'HTML5',value: 55},
                        {name: 'CSS3',value: 120},
                        {name: 'javascript',value: 78},
                        {name: 'VUE',value: 66},
                        {name: 'NODE',value: 80},
                        {name: 'React',value: 45},
                        {name: 'UNI-APP',value: 29}
                    ],
                    // rowNum: 5
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

<style>
/* 不要加scoped，加了!important就不起作用了 */
.dv-scroll-ranking-board .ranking-column .inside-column {
   /* 线条颜色 */
    background-color: #abcdef !important;
}
</style>