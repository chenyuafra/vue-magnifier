<template>
  <div class="container">
    这里接收数据：
    <p style="margin-top: 20px;">
    <span class="itembox">{{rightva}}</span></p>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    props: ['rightva'],
    // 模板渲染前钩子函数
    created() {

    },
    // 模板渲染后钩子函数
    mounted() {
      console.log(rightva)
    },
    methods: {

    },
  }
</script>
<style scoped>
</style>
