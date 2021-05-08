<template>
	<view class="chat"  v-if="isLogin==true">
		<view class="head"> 
			<view class="head-left">
				<image class="portrait" src="../../static/image/chat/t2.jpeg" mode=""></image>
				<text class="name">天天</text>
			</view>
			<view class="head-right">
				<image src="../../static/image/chat/more.png" mode=""></image>
			</view>
		</view>  
		<view class="chat-list">
			<navigator url="../chatRoom/chatRoom">
				<view class="friend" v-for="(item,index) in friends" :key="item.id">
				<view class="friend-left">
					<image :src="item.imgurl" mode=""></image>
					<text class="tip" v-if="item.tip>0">{{item.tip}}</text>
				</view>
				<view class="friend-info">
					<text class="friend-name">{{item.name}}</text>
					<text class="news">{{item.news}}</text>
				</view>
				<view class="time">
					{{changeTime(item.time)}}
				</view>
			</view>
			</navigator>
			
		</view>
	</view>
</template>

<script>
	import chatData from'./chatData.js';
	import myFunction from'../../JS/myFunction.js';
	export default {
		data() {
			return {
				friends:[],
				userInfo:'',
				isLogin:''
			}
		},
		onLoad() {
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
			
			this.getFrinds();
			
		},
		onShow() {
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
			if(this.isLogin==false){
				uni.showLoading({
					title:'请先登录'
				});
				setTimeout(function(){
					uni.hideLoading();
				},700);
			}
			console.log(this.isLogin)
			
			this.getFrinds();
			
		},
		methods: {
			//处理时间
			changeTime:function(e){
				return myFunction.dateTime(e);
			},
			//获取好友列表
			getFrinds:function(){
				this.friends=chatData.frineds();
				console.log(this.friends); 
			}
		}
	}
</script>

<style>
@import url("chat.css");
</style>
