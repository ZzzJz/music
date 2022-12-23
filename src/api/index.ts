import http from "@/utils/request";
import {RootObject} from "./types/banner";
import {RootObject as playListType} from "./types/playList";
import {RootObject as styleListType} from "./types/styleList";

export const banner = () => {
  return http.post<RootObject>('/banner', {type: 1})
}

export const playList = () => {
  return http.post<playListType>('/personalized')
}

export const styleList = () => {
  return http.post<styleListType>('/style/list')
}
//sort: 排序方式，0: 按热度排序，1: 按时间排序 size : 返回数量 , 默认为 20 tagId: 曲风 ID
export const styleSong = (params:{tagId?:number,size?:number,sort?:number}) => {
  return http.post<{code:number,data:{songs:[]}}>('/style/song',params)
}

export const newSong = () => {
  return http.post<styleListType>('/personalized/newsong')
}
