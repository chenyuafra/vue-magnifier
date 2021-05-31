<template>
  <div class="marquee-wrap" ref="marqueebox">
    <div class="scroll" ref="scroll">
      <p class="marquee">{{text}}</p>
      <!-- <p class="copy">{{copy}}</p> -->
    </div>
    <p class="getWidth" ref="getWidth">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'marquee',
  props: ['val'],
  data () {
    return {
      timer: null,
      text: '',
      copy:''
    }
  },
  created () {
  },
  mounted () {
      this.text=this.val
  },
  updated(){
      this.text=this.val
      let timer = setTimeout(() => {
        this.move()
        clearTimeout(timer)
    }, 3000)
  },
  methods: {
    move () {
      // let maxWidth = document.querySelector('.marquee-wrap').clientWidth
      // let width = document.querySelector('.getWidth').scrollWidth
      let boxwidth=this.$refs.marqueebox.clientWidth
      let width=this.$refs.getWidth.clientWidth
      if (width <= boxwidth) return
      // let scroll = document.querySelector('.scroll')
      let scroll=this.$refs.scroll
      let distance = 0
      this.timer = setInterval(() => {
        distance -= 1
        if (-distance >= width) {
          distance = 30
        }
        scroll.style.transform = 'translateX(' + distance + 'px)'
      }, 20)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
  .marquee-wrap {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .marquee{
    margin-right: 16px;
  }
  p {
    word-break:keep-all;
    white-space: nowrap;
  }
  .scroll {
    display: flex;
  }
  .getWidth {
    word-break:keep-all;
    white-space:nowrap;
    position: absolute;
    opacity: 0;
    top: 0;
  }
</style>
