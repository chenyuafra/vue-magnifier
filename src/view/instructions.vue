<template>
  <div class="container">
    <h2>git 指令</h2>
    <p>
      Git全局设置
      git config --global user.name“ zhangchenyu”
      git config --global user.email“ zhangchenyu@chinau.cc”

      创建一个新的仓库
      git克隆http://gitlab.srpmall.com.cn/zhangchenyu/chen.git
      cd chen
      触摸README.md
      git添加README.md
      git commit -m“添加自述文件”
      git push -u原始主机

      现有资料夹
      光盘现有文件夹
      git init
      git remote add origin http://gitlab.srpmall.com.cn/zhangchenyu/chen.git
      git添加
      git commit -m“初始提交”
      git push -u原始主机

      现有的Git存储库
      cd existing_repo
      git remote重命名起源old-origin
      git remote add origin http://gitlab.srpmall.com.cn/zhangchenyu/chen.git
      git push -u origin --all
      git push -u origin-标签
    </p>
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
</style>
