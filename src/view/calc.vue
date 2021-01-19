<template>
  <div class="container">
    12345
    <div @click="judgetype">判断数据类型</div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        medo: [{
          name: '小明',
          score: '99'
        }, {
          name: '小明',
          score: '77'
        }, {
          name: '小明',
          score: '66'
        }, {
          name: '小红',
          score: '100'
        }, {
          name: '小红',
          score: '99'
        }, {
          name: '小红',
          score: '89'
        }, {
          name: '小张',
          score: '66'
        }, {
          name: '小张',
          score: '72'
        }, {
          name: '小明',
          score: '65'
        }, {
          name: '小吴',
          score: '76'
        }, {
          name: '小吴',
          score: '81'
        }, {
          name: '小吴',
          score: '62'
        }, {
          name: '小张',
          score: '88'
        }, ],
        mode2: [{
          '长度': '11cm',
        }, {
          '宽度': '22mm',
        }, {
          '高度': '4cm'
        }]
      }
    },
    // 模板渲染前钩子函数
    created() {

    },
    // 模板渲染后钩子函数
    mounted() {
      // this.classify()
      this.convert()
    },
    methods: {
      // 取出相同key的最大值
      classify(arr) {
        var arr = this.medo
        let obj = {}
        arr.map(v => {
          obj[v.name] = 0
        })
        let tempArr = Object.keys(obj)
        let result = tempArr.map(v => {
          return arr.filter(_v => v == _v.name)
        })
        // return result
        console.log(result)
      },
      // 将key value 转数组
      convert() {
        var obj = this.mode2
        var bb = []
        bb = obj.map(item => {
          return {
            'lable': Object.keys(item)[0],
            'value': Object.values(item)[0]
          }
        })
        console.log(bb)
      },
      // 判断数据类型
      judgetype(){
        console.log(this.medo)
        console.log(this.medo.toString() )
      }
    },
  }
</script>
<style scoped>
</style>
