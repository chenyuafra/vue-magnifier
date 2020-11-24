<template>
  <div class="container">
    <Left @leftv='changeva'></Left>
    <Right :rightva="rightva"></Right>
  </div>
</template>
<script>
  import Left from '../lrvalue/left.vue'
  import Right from '../lrvalue/right.vue'
  export default {
    components: {
      Left,
      Right
    },
    name: '',
    data() {
      return {
        rightva: ''
      }
    },
    // 模板渲染前钩子函数
    created() {

    },
    // 模板渲染后钩子函数
    mounted() {

    },
    methods: {
      changeva(msg) {
        // console.log(msg)
        this.rightva=msg
      }
    },
  }
</script>
<style scoped>
</style>
