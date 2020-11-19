<template>

  <div class="outer_box">
    给图片添加，点击旋转、放大、缩小、拖动的效果
    <!-- 因为旋转是在中心点旋转的,而放大缩小是在左上角 -->
    <!-- 所以给图片的父元素加上放大缩小 -->
    <!-- 给图片加上旋转 -->
    <div class="demobox">
      <div class="img_box" ref="imgDiv" :style="{transform:'scale('+multiples+')',transformOrigin:+origintop+'%'+originleft+'%'}  "
        @mousewheel.prevent="rollImg">
        <img :src="imgSrc" ref="img" alt="" :style="{transform:'rotateZ('+deg+'deg)',transformOrigin:'50% 50%',}"
          @mousedown="down">
      </div>
    </div>
    <div class="small">
      <img v-for="item,i in imgbox" :src="item.smallimg" @click="enlarge(item)">
    </div>
    <div class="bottom">
      <!-- 点击时旋转90度 -->
      <button @click="magnify">放大</button>
      <!-- 缩小0.25 -->
      <button @click="shrink">缩小</button>
      <!-- 放大0.25 -->
      <button @click="rotate">旋转</button>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgSrc: 'https://publish-pic-cpu.baidu.com/cf60d547-a35c-4e77-8ef3-30d0e5b0e48b.jpeg@q_90,w_450',
        deg: 0,
        multiples: 1,
        origintop: 50,
        originleft: 50,
        imgbox: [{
            id: '1',
            smallimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3035979662,3987018636&fm=26&gp=0.jpg',
            bigimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3035979662,3987018636&fm=26&gp=0.jpg',
          },
          {
            id: '2',
            smallimg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3066163718,719671737&fm=26&gp=0.jpg',
            bigimg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3066163718,719671737&fm=26&gp=0.jpg',
          },
          {
            id: '3',
            smallimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3772878820,686579824&fm=26&gp=0.jpg',
            bigimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3772878820,686579824&fm=26&gp=0.jpg',
          },
          {
            id: '4',
            smallimg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2370914011,2125569209&fm=26&gp=0.jpg',
            bigimg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2370914011,2125569209&fm=26&gp=0.jpg',
          },
          {
            id: '5',
            smallimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2560846650,394276549&fm=26&gp=0.jpg',
            bigimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2560846650,394276549&fm=26&gp=0.jpg',
          },
        ]
      }
    },
    methods: {
      // 放大
      magnify() {
        if (this.multiples >= 3) {
          return
        }
        this.multiples += 0.25
      },
      // 缩小
      shrink() {
        if (this.multiples <= 0.5) {
          return
        }
        this.multiples -= 0.25
      },
      // 鼠标滚轮
      rollImg() {
        if (event.wheelDelta > 0) {
          this.magnify()
        } else {
          this.shrink()
        }
      },
      // 旋转
      rotate() {
        this.deg += 90;
        if (this.deg >= 360) {
          this.deg = 0
        }
      },
      // 拖动图片
      down(e) {
        e.preventDefault()
        // 获取元素
        var left = document.querySelector('.img_box')
        var img = document.querySelector('.img_box img')
        var x = e.pageX - img.offsetLeft
        var y = e.pageY - img.offsetTop
        // 添加鼠标移动事件
        left.addEventListener('mousemove', move)

        function move(e) {
          img.style.left = e.pageX - x + 'px'
          img.style.top = e.pageY - y + 'px'
        }
        // 添加鼠标抬起事件，鼠标抬起，将事件移除
        img.addEventListener('mouseup', function() {
          left.removeEventListener('mousemove', move)
        })
        // 鼠标离开父级元素，把事件移除
        left.addEventListener('mouseout', function() {
          left.removeEventListener('mousemove', move)
        })
      },
      enlarge(item) {
        var img = document.querySelector('.img_box img')
        img.style.left = '0px',
          img.style.top = '0px',
          this.deg = 0,
          this.multiples = 1,
          this.imgSrc = item.bigimg
      }
    }
  }
</script>
<style scoped>
  .outer_box {
    width: 400px;
  }

  .outer_box>div {
    white-space: nowrap;
    display: inline-block;
    position: relative;
  }

  .img_box img {
    max-width: 400px;
    max-height: 400px;
    cursor: move;
    position: absolute;
    top: 0;
    left: 0;
  }

  .demobox {
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-color: yellow;
  }

  .small {
    width: 400px;
    text-align: left;
    overflow-x: auto;
  }

  /*滚动条整体样式*/
  .small::-webkit-scrollbar {
    width: 1px;
    height: 6px;
  }

  /*滚动条里面小方块*/
  .small::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
  }

  /*滚动条里面轨道*/
  .small::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #ededed;
  }

  .small img {
    width: 100px;
    height: 100px;
  }
</style>
