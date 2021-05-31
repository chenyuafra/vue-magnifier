<template>
  <div class="container">
    <p>父子组件传值</p>
    <div class="bigbox">
      <div class="l">
        <Left @leftv='changeva'></Left>
      </div>
      <div class="r">
        <Right :rightva="rightva"></Right>
      </div>
    </div>


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
  .bigbox{
    width: 500px;
    height: 300px;
    border: 5px solid #A9BFD6;
    margin: 0 auto;
    display: flex;
  }
  .bigbox .l{
    flex: 1;
    /* background-color: antiquewhite; */
  }
  .bigbox .r{
    flex: 1;
    /* background-color: teal; */
  }
</style>
