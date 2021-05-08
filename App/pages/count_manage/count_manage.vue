<template>
  <view class="pageContainer">
    <view class="cardList">
      <view class="card-item">
        <text class="title">账号</text>
		<text></text>
        <image class="more" src="../../static/iconfont/more.png"></image>
      </view>
      <view class="card-item">
        <text class="title">手机号</text>
		<text>{{this.userInfo.phone}}</text>
        <!-- <image class="more" src="../../static/iconfont/more.png"></image> -->
      </view>
      <view class="card-item">
        <text class="title">密码</text>
        <image class="more" src="../../static/iconfont/more.png"></image>
      </view>
      <view class="card-item">
        <text class="title">应急联系人</text>
        <image class="more" src="../../static/iconfont/more.png"></image>
      </view>
    </view>
  </view>
</template>

<script>
import config from "../../utils/config.js"
export default {
  data() {
    return {
		// 手机号
		userPhone:'',
		// 用户信息,
		userInfo:'',
		// 是否登录
		isLogin: false,
	};
  },
  methods: {},
  onLoad() {
  	
  },
  onShow() {
  	// 使用挂载方法获取用户数据
  	let userInfo = this.getGlobalUser("globalUser");
  	
  	console.log(userInfo);
  	if (userInfo != null) {
  	  this.isLogin = true;
  	  this.userInfo = userInfo;
  	  console.log(this.userInfo);
  	} else {
  	  this.isLogin = false;
  	  this.userInfo = {};
  	}
  }
};
</script>

<style>
@import url("./count_manage.css");
</style>
