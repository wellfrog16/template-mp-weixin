<template>
    <view>
        <view class="main">111</view>
    </view>
</template>

<script>
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
    }
}
</script>

<style lang="less" scoped>
.main {
    background-color: greenyellow;
}
</style>
