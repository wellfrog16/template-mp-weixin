<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<button type="primary" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">基础授权</button>
		</view>
	</view>
</template>

<script>
import { USER_INFO } from '@/helper/constant';

export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {
		this.$helper.site();
	},
	methods: {
		mpGetUserInfo(res) {
			const { detail } = res;
			if (detail.errMsg !== 'getUserInfo:ok') {
				uni.showModal({
					title: '获取用户信息失败',
					content: '错误原因' + detail.errMsg,
					showCancel: false
				});
			} else {
				uni.setStorage({
					key: USER_INFO,
					data: { ...detail.userInfo },
					fail: (err) => {
						uni.showModal({
							title: '数据缓存失败',
							content: '错误原因' + err.messsage,
							showCancel: false
						});
					}
				});
			}
		}
	}
}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
