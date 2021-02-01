<template>
    <div id='pageFrame'>
        <div class="logo">
            shmilyvidan
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'PageFrame'
}
</script>
<style lang="less" scope>
    #pageFrame{
        width: 100vw;
        height: calc(100vh - 20px);
        background: url('../../assets/momentum.jpg');
        background-size: cover;
        padding-top: 20px;
        position: relative;
    }
    .logo{
        width: 80px;
        height: 80px;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 100%;
        box-shadow: 0 0 50px rgba(0,0,0,.1);
        text-align: center;
        line-height: 80px;
        font-size: 12px;
        color: #333
    }
</style>