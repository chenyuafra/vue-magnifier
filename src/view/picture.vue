<template>
  <div class="outer_box">
    <p>给图片添加，点击旋转、放大、缩小、拖动的效果</p>
    <div class="demobox">
      <div class="img_box" ref="imgDiv" :style="{transform:'scale('+multiples+')',transformOrigin:+origintop+'%'+originleft+'%'}  "
        @mousewheel.prevent="rollImg">
        <img :src="imgSrc" ref="img" alt="" :style="{transform:'rotateZ('+deg+'deg)',transformOrigin:'50% 50%',top:+movetop+'px',left:+moveleft+'px',}"
          @mousedown="down" @mouseup="mouup" @mousemove="move" @mouseleave="mouup">
      </div>
    </div>
    <div class="thumbnail">
      <span class="thumbnail-left" @click="slideFront()">
        '-'
      </span>
      <div class="thumbnail-box">
        <div class="thumbnail-img" :style="{width:+imgbox.length*100+'px',left: +thumbnailPosition +'px',}">
          <img v-for="item,i in imgbox" :src="item.smallimg" @click="enlarge(item)">
        </div>
      </div>
      <span class="thumbnail-right" @click="slideNext()"> > </span>
    </div>r
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
        thumbnailPosition: 0,
        ifDrag: false,
        x0: 0,
        y0: 0,
        movetop: 0,
        moveleft: 0,
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
    props: ['ImgData'],
    // 模板渲染前钩子函数
    created() {

    },
    // 模板渲染后钩子函数
    mounted() {
      // console.log(this.ImgData)
      this.imgbox = this.ImgData
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
        this.ifDrag = true
        this.x0 = e.offsetX
        this.y0 = e.offsetY
      },
      mouup(e) {
        this.ifDrag = false
      },
      move(e) {
        if (this.ifDrag) {
          e.preventDefault()
          this.moveleft += e.offsetX - this.x0
          this.movetop += e.offsetY - this.y0
        }

      },
      enlarge(item) {
        this.movetop = 0,
          this.moveleft = 0,
          this.deg = 0,
          this.multiples = 1,
          this.imgSrc = item.bigimg
      },
      // 左右切换
      slideFront() {
        this.thumbnailPosition += 100
        if (this.thumbnailPosition >= 0) {
          this.thumbnailPosition = 0
        }

      },
      slideNext() {
        this.thumbnailPosition -= 100
        if (this.thumbnailPosition <= 340 - (this.imgbox.length * 100)) {
          this.thumbnailPosition = 340 - (this.imgbox.length * 100)
        }
      }
    }
  }
</script>
<style scoped>
  .outer_box {
    width: 100%;
    background-color: #A9BFD6;
  }

  .img_box img {
    max-width: 400px;
    max-height: 400px;
    cursor: move;
    position: absolute;
  }

  .demobox {
    display: hidden;
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-color: #EDEDED;
    margin: 0 auto;
  }

  .thumbnail {
    white-space: nowrap;
    width: 340px;
    height: 100px;
    text-align: left;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 30px;
    position: relative;
  }

  .thumbnail-box {
    width: 340px;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .thumbnail-img {
    position: absolute;
    top: 0;
    transition: 0.5s;
  }

  .thumbnail-img img {
    width: 100px;
    height: 100px;
  }

  .thumbnail-left,
  .thumbnail-right {
    width: 30px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    position: absolute;
    z-index: 9;
    cursor: pointer;
    user-select: none;
    background-color: #EDEDED;
  }

  .thumbnail-left {
    top: 0;
    left: 0;
  }

  .thumbnail-right {
    top: 0;
    right: 0;
  }
</style>
