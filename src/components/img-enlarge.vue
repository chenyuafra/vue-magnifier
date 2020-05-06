<template>
  <div>
    <div class="page">
      <p>demo</p>
      <div v-for="item,i in imglist" :key="i">
        <img :src="item" alt="" @click="enlarge(i)">
      </div>
    </div>
    <div class="mask" v-if="showbigimg">111</div>
    <div class="imgbox" v-if="showbigimg">
      <div class="smallbox">
        <div class="movementbox">
          <img :src="nowing" alt="" ref="original"  @mouseenter="enter" @mouseout ="out" @mousemove="move" >
          <div class="showbox" :style="{position: 'absolute',top:showboxTop+'px',left:showboxLeft+'px'}"></div>
          <P>框距离小图{{showboxTop+25}} ，{{showboxLeft+25}}</P>
          <P>框距离小图{{showboxTop+25}} ，{{showboxLeft+25}}</P>
          <P>大图距离显示区{{Magnifiedtop}} ，{{MagnifiedLeft}}</P>
        </div>
      </div>
      <div class="bigbox">
         <img :src="nowing"  :style="{width:MagnifiedWidth+'px',height:MagnifiedHeight+'px',position: 'absolute',top:Magnifiedtop+'px',left:MagnifiedLeft+'px'}" alt="" >
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        imglist: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3702648800,3967102116&fm=26&gp=0.jpg',
          'https://lh3.googleusercontent.com/proxy/Y9n9Ieq9dwmQ_tSXvL_VN-wc9mIjWvtT0P7BF2I2Qr1q5LHT-UH1TBDCH2eT_8nzRinPDtyxQM4PqTNAvCX1S4_LPuBMcCkaEY_JdXI'
        ],
        showbigimg:false,
        showbox:false,
        nowing:'',

        showboxTop:'',
        showboxLeft:'',

        MagnifiedWidth:'',
        MagnifiedHeight:'',
        Magnifiedtop:'',
        MagnifiedLeft:'',
      }
    },
    created() {},
    methods: {
      enlarge(i){
        console.log(i)
        this.showbigimg=true
        this.nowing=this.imglist[i]
      },
      enter(e){
        var originalHeight= this.$refs.original.offsetHeight
        var originalWidth= this.$refs.original.offsetWidth
        this.showboxLeft=e.offsetX-25
        this.showboxTop=e.offsetY-25
        // this.showbox=true
        // console.log(e)
        console.log(originalWidth)
        console.log(originalHeight)
        this.MagnifiedWidth=originalWidth*3
        this.MagnifiedHeight=originalHeight*3
        this.Magnifiedtop=-(e.offsetX*3)+200
        this.MagnifiedLeft=-(e.offsetY*3)+200
        // console.log(this.Magnifiedtop)
        // console.log(this.MagnifiedLeft)
        // console.log(this.showboxTop)
        // console.log(this.showboxLeft)
      },
      move(e){
        // console.log(e)
        // console.log(e.clientX)
        // console.log(e.clientY)
        this.showboxLeft=e.offsetX-25
        this.showboxTop=e.offsetY-25
        this.Magnifiedtop=-(e.offsetY*3)+200
        this.MagnifiedLeft=-(e.offsetX*3)+200
        // console.log(this.showboxTop)
      },
      out(){
        // this.showbox=false
      },
    },
    mounted() {},
  }
</script>
<style scoped>
  .mask{width: 100%;height: 100%;background-color: rgba(0,0,0,0.5);position: fixed;top: 0;left: 0;bottom: 0;right: 0;}
  .imgbox{width: 800px;height: 400px;display: flex;background-color: yellow;position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;}
  .smallbox{height: 400px;flex: 1;background-color: antiquewhite;}
  .smallbox img{max-width: 100%;max-height: 100%;}
  .movementbox{position: relative;}
  .showbox{position: absolute;width: 50px;height: 50px;background-color: rgba(220,20,60);position: absolute;top: 0;left: 0;}



  .bigbox{height: 100%;flex: 1;background-color: aquamarine;position: relative;overflow: hidden;}
  .bigbox img{width: 1000px;position: absolute;top: 0;left: 0;}

</style>
