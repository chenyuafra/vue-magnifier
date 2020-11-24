<template>
  <div class="container">
    <p style="background-color: #7FFFD4;width: 200px;height: 200px;">{{rightva}}</p>
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
