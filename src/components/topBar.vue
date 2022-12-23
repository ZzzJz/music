<template>
  <div class="p-30 topBar">
    <div class="flex items-center justify-between">
      <van-badge v-if="message" :content="message">
        <van-icon class="topBar-wap-icon"  name="wap-nav"/>
      </van-badge>
      <van-icon v-else name="wap-nav"/>
      <van-search class="topBar-search flex-auto m-l-20 m-r-20" v-model="searchKey" placeholder="请输入搜索关键词"/>
      <img class="topBar-micr" src="~@/assets/image/24gf-mic.png">
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const message = ref(0)
const searchKey = ref('')

</script>
<style lang="scss" scope>
.topBar {
  background: #f6f6f8;
  &-search{
    height: 50px;
    border-radius: 40px;
    div{
      background: #fff;
    }
  }
  &-micr{
    width: 40px;
    height: 45px;
  }
  .van-icon-wap-nav{
    font-size: 40px;
  }
}
</style>