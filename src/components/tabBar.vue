<template>
  <div class="content">
    <router-view />
  </div>
  <van-tabbar route class="tabBar" v-model="active" active-color="rgba(220,38,38,1)">
    <van-tabbar-item to="/index">
      <span>发现</span>
      <template #icon="props">
        <i class="iconfont icon-yinleyule" :class="{'text-red-600':props.active}"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/music">
      <span>播客</span>
      <template #icon="props">
        <i class="iconfont icon-shengyin" :class="{'text-red-600':props.active}"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/my">
      <span>我的</span>
      <template #icon="props">
        <i class="iconfont icon-yinle" :class="{'text-red-600':props.active}"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/attention">
      <span>关注</span>
      <template #icon="props">
        <i class="iconfont icon-yiguanzhu" :class="{'text-red-600':props.active}"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/community">
      <span>社区</span>
      <template #icon="props">
        <i class="iconfont icon-shequ" :class="{'text-red-600':props.active}"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import {reactive, ref} from "vue";
  const active = ref('')
</script>
<style scope lang="scss">
.tabBar{
  color: #c5c5c5;
  .iconfont{
    font-size: 50px;
  }
}
.content{
  padding-bottom: 100px;
}
</style>