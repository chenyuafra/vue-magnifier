<template>
  <div class="container">
    <div class="left">
      <Picture :ImgData="imgbox"></Picture>
    </div>
    <div class="right">
      <Picture :ImgData="imgbox2"></Picture>
    </div>
  </div>
</template>
<script>
  import Picture from '../view/picture.vue'
  export default {
    components: {
      Picture
    },
    name: '',
    data() {
      return {
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
        ],
        imgbox2: [{
            id: '1',
            smallimg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3834628488,1054979046&fm=26&gp=0.jpg',
            bigimg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3834628488,1054979046&fm=26&gp=0.jpg',
          },
          {
            id: '2',
            smallimg:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=280495425,668476098&fm=26&gp=0.jpg',
            bigimg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=280495425,668476098&fm=26&gp=0.jpg',
          },
          {
            id: '3',
            smallimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605765447959&di=d8dc70cc4d51a0955cfb0f1ae7be3422&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180804%2F8e791c1f1f394b64b09643d5ae779511.jpeg',
            bigimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605765447959&di=d8dc70cc4d51a0955cfb0f1ae7be3422&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180804%2F8e791c1f1f394b64b09643d5ae779511.jpeg',
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
  .left,.right{width: 500px;float: left;}
</style>
