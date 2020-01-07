<template>
    <view>
        <view class="main">111</view>
        <text>{{title}}</text>
        <text>{{id}}</text>
    </view>
</template>

<script>
import api from '@/api/usr/test';

export default {
    data() {
        return {
            id: '',
            title: '',
        };
    },
    onLoad() {
        console.log('onload');
    },
    onShow() {
        console.log('onshow');
        console.log(wx);
        api.list()
            .then((res) => {
                this.id = res.id;
                this.title = res.title;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style lang="less" scoped>
.main {
    background-color: greenyellow;
}
</style>
