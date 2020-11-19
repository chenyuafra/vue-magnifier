<template>
	<!-- <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <el-button @click.native.prevent="handleReset2">重置</el-button>
    </el-form-item>
  </el-form> -->
	<div class="img_box">
		<div class="img_left" @mousewheel.prevent="rollImg">
			<img :src="imgUrl" alt="" class="img" ref="imgDiv" @mousedown="move">
		</div>
		<div class="img_right" @mousewheel.prevent="rollImg">
			<img :src="imgUrl" alt="" class="img" ref="imgDiv" @mousedown="move">
		</div>
	</div>

</template>

<script>
	// import {
	// 	requestLogin
	// } from '../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				imgUrl:'https://img14.360buyimg.com/pop/s590x470_jfs/t1/152814/4/4648/65316/5fa20b2dE32749154/39eb010a8c2516cb.jpg.webp',
			};
		},
		methods: {
			// 拖动图片
			move(e) {
				e.preventDefault()
				// 获取元素
				var left = document.querySelector('.img_left')
				var img = document.querySelector('.img_left .img')
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
			// 缩放图片
			rollImg() {
				/* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */
				var zoom = parseInt(this.$refs.imgDiv.style.zoom) || 100;
				/* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */
				zoom += event.wheelDelta / 12;
				/* 最小范围 和 最大范围 的图片缩放尺度 */
				if (zoom >= 80 && zoom < 500) {
					this.$refs.imgDiv.style.zoom = zoom + "%";
				}
				return false;
			}
		}
	}
</script>

<style scoped>
	.login-container {
		/*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		background-clip: padding-box;
		margin: 180px auto;
		width: 350px;
		padding: 35px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 25px #cac6c6;

		.title {
			margin: 0px auto 40px auto;
			text-align: center;
			color: #505458;
		}

		.remember {
			margin: 0px 0px 35px 0px;
		}
	}

	.img_box{
		width: 800px;
		margin:50px auto;
		overflow: hidden;
	}
	.img_left,.img_right {
		position: relative;
		width: 360px;
		height: 460px;
		background-color: #fff;
		padding: 20px;
		float: left;
		overflow: hidden;
	}

	.img {
		position: absolute;
		top: 5px;
		left: 7px;
		max-width: 923px;
		max-height: 460px;
		cursor: move;
	}
</style>
