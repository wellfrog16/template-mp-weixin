export function login() {
    uni.login({
    	provider: 'weixin',
    	// #ifdef MP-ALIPAY
    	scopes: 'auth_user',  //支付宝小程序需设置授权类型
    	// #endif
    	success: (res) => {
    		console.log(res);
    	},
    	fail: (err) => {
    		console.log(err);
    	}
    });
}