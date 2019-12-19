import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        userInfo: null, // 微信用户信息
	},
	mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
	},
    getters:{
        hasAuth1(state) {
            return !!state.userInfo;
        },
        hasAuth2(state) {
            return !!state.userInfo;
        },
    },
	actions: {

	}
})

export default store
