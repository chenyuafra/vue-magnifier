<template>
  <div class="container">
    <div class="title">
      <router-link to='/imgenlarge'>
        <p>放大镜</p>
      </router-link>
      <router-link to='/show'>
      <p>倒计时</p>
      </router-link>
      <router-link to='/lrvalue'>
        <p>父子传值</p>
      </router-link>
      <router-link to='/show'>
        <p>图片</p>
      </router-link>
      <router-link to='/calc'>
        <p>计算</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    // 模板渲染前钩子函数
    created() {

    },
    // 模板渲染后钩子函数
    mounted() {

    },
    methods: {

    },
  }
</script>
<style scoped>
  .title {
    width: 100%;
    height: 50px;
    background-color: #EDEDED;
    line-height: 50px;
  }

  .title p {
    display: inline-block;
    min-width: 80px;

  }
</style>
