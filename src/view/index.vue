<template>
  <top-bar></top-bar>
  <div class="swipe">
    <div class="grey-bg"></div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeImgArr" :key="item">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="area flex">
    <div v-for="(item,index) in boxList" :key="index" class="box">
      <div class="fontBox">
        <i class="iconfont" :class="item.icon"></i>
      </div>
      <div>{{ item.name }}</div>
    </div>
  </div>
  <div class="area2">
    <div class="area2-title">
      <h4>推荐歌单</h4>
      <button>更多></button>
    </div>
    <div class="area2-box">
      <div v-for="item in playListArr" :key="item.id" class="area2-box-one">
        <img :src="item.picUrl" alt="" srcset="">
        <div class="area2-box-content">{{ item.name }}</div>
        <div class="area2-box-count">{{ item.playCountF }}</div>
      </div>
    </div>
  </div>
  <div class="area2">
    <div class="area2-title">
      <h4>精选{{ highTag?.tagName }}歌曲</h4>
    </div>
    <div class="swipeBox">
      <van-swipe class="swipeBox-swiper" :width="350" :show-indicators="false">
        <van-swipe-item class="swipeBox-item" v-for="(item,index) in songList" :key="index">
          <div class="swipeBox-item-song flex justify-between" v-for="song in item" :key="song.id">
            <div class="flex">
              <img :src="song.al.picUrl" alt="" srcset="">
              <div class="p-l-10 p-r-10">
                <div>
                  <span class="text-base text-black">{{ song.al.name }}</span>
                  <span>-{{ song.ar[0].name }}</span>
                </div>
                <span></span>
              </div>
            </div>
            <i class="iconfont icon-bofangshu"></i>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script setup lang="ts">
import {reactive, ref, toRef} from "vue";

import TopBar from "@/components/topBar.vue";

import {banner, styleList, playList, styleSong, newSong} from "@/api/index";

import {RootObjectResult as playListTypeObj} from "@/api/types/playList";
import {RootObjectData} from "@/api/types/styleList";
import {group} from "@/utils";

//banner图部分
let swipeImgArr = reactive<string[]>([])
const getBanner = () => {
  banner().then((res) => {
    for (let i = 0; i < res.banners.length; i++) {
      swipeImgArr.push(res.banners[i].pic)
    }
  })
}
getBanner()

//推荐歌单
let playListArr = ref<playListTypeObj[]>([])
const getPlayList = () => {
  playList().then((res) => {
    playListArr.value = res.result.map(item => {
      return {
        playCountF: item.playCount > 99999999 ? (Math.round((item.playCount / 10000000)) + '亿') : (item.playCount > 9999 ? (Math.round(item.playCount / 1000) + '万') : item.playCount),
        ...item
      }
    })
  })
}
getPlayList()

//每日推荐
const boxList = reactive<{ name: String, icon: String }[]>([{
  name: '每日推荐',
  icon: 'icon-rili'
}, {
  name: '私人FM',
  icon: 'icon-shouyinji'
}, {
  name: '歌单',
  icon: 'icon-yinlegedanyinfu'
}, {
  name: '排行榜',
  icon: 'icon-paixingbang'
}, {
  name: '有声书',
  icon: 'icon-shouyinji'
}])

//曲风列表
let highTag = ref<RootObjectData>()
const getStyleList = () => {
  styleList().then((res) => {
    highTag.value = res.data[Math.floor(Math.random() * res.data.length)]
    getStyleSong()
  })
}
//曲风歌曲
const songList = ref([[]])
const getStyleSong = () => {
  styleSong({tagId: highTag.value?.tagId}).then((res) => {
    songList.value = group(res.data.songs, 5)
    console.log(songList.value)
  })
}
getStyleList()

//获取新音乐
</script>
<style scope lang="scss">
.grey-bg {
  background: #f6f6f8;
  height: 240px;
}

.swipe {
  position: relative;
  height: 320px;
  width: 100%;
  overflow: hidden;

  .my-swipe {
    position: absolute;
    top: 0px;

    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      height: 300px;
    }

    img {
      width: 90%;
      height: 100%;
      border-radius: 10px;
    }
  }
}

.area::-webkit-scrollbar {
  display: none;
}

.area {
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 30px;

  i {
    color: red;
    font-size: 60px;
  }

  .box {
    font-size: 14px;
    color: #828081;
    padding: 0 26px;
    text-align: center;
  }

  .fontBox {
    width: 80px;
    height: 80px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
}

.area2 {
  &-title {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;

    button {
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.12);
      height: 70px;
      border-radius: 999px;
      padding: 0px 30px;
    }
  }

  &-box::-webkit-scrollbar {
    display: none;
  }

  &-box {
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
    overflow: auto;
    font-size: 14px;

    img {
      width: 200px;
      height: 180px;
      border-radius: 30px;
    }

    &-one {
      margin: 0 10px;
      position: relative;
    }

    &-count {
      position: absolute;
      right: 10px;
      top: 10px;
      background: rgba(0, 0, 0, 0.12);
      border-radius: 999px;
      color: white;
      padding: 5px 20px;
      font-size: 12px;
    }

    &-content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
}

.swipeBox {
  position: relative;
  padding: 0 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
  }

  &-swiper {
    .van-swipe__track {
    }
  }

  &-item {
    padding-right: 80px;
    &-song {
      font-size: 12px;
      margin-bottom: 10px;
      color: #b0b0b0;
      .icon-bofangshu{
        font-size: 50px;
        color: #b0b0b0;
      }
    }
  }
}
</style>