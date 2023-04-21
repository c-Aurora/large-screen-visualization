<!-- 头部 -->
<template>
    <div class='header'>
        <dv-decoration-8 style="width:300px;height:30px;" />
        <dv-decoration-3 style="width:200px;height:30px;" />
        <div class="title">
            <span>数据可视化</span>
            <dv-decoration-5 style="width:300px;height:50px;" />
        </div>
        <dv-decoration-3 style="width:200px;height:30px;" />
        <dv-decoration-8 :reverse="true" style="width:300px;height:30px;" />
    </div>
</template>

<script>
    export default {
        name: '',
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

<style scoped lang="scss" >

$color : red ;
.header{
    // color: $color;
    padding: 15px 0;
    width: 100%;
    min-width: 1320px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    .title{
       position: relative;
       span{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        font-weight: 400;
       }
    }
}
</style>