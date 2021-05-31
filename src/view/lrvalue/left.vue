<template>
  <div class="container">
    点击这里：
    <p style="margin-top: 20px;">
      <span class="itembox" v-for="item,i in page" @click="setvalue(item)">{{item}}</span>
    </p>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        page: [1, 2, 3, 4, 5]
      }
    },
    // 模板渲染前钩子函数
    created() {

    },
    // 模板渲染后钩子函数
    mounted() {

    },
    methods: {
      setvalue(item) {
        // console.log(item)
        this.$emit('leftv', item)
      }
    },
  }
</script>
<style scoped>
  .itembox{
    padding: 10px;
    border: 1px solid slategray;
    cursor: pointer;
  }
</style>
