export interface RootObject {
  banners: RootObjectBanners[];
  code: number;
}
export interface RootObjectBannersSongAr {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}
export interface RootObjectBannersSongAl {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}
export interface RootObjectBannersSongH {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface RootObjectBannersSongM {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface RootObjectBannersSongL {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface RootObjectBannersSongSq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface RootObjectBannersSongHr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
export interface RootObjectBannersSongPrivilegeFreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
}
export interface RootObjectBannersSongPrivilegeChargeInfoList {
  rate: number;
  chargeType: number;
}
export interface RootObjectBannersSongPrivilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  freeTrialPrivilege: RootObjectBannersSongPrivilegeFreeTrialPrivilege;
  chargeInfoList: RootObjectBannersSongPrivilegeChargeInfoList[];
}
export interface RootObjectBannersSong {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: RootObjectBannersSongAr[];
  alia: any[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  cf: string;
  al: RootObjectBannersSongAl;
  dt: number;
  h: RootObjectBannersSongH;
  m: RootObjectBannersSongM;
  l: RootObjectBannersSongL;
  sq: RootObjectBannersSongSq;
  hr: RootObjectBannersSongHr;
  cd: string;
  no: number;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  resourceState: boolean;
  version: number;
  single: number;
  rtype: number;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  privilege: RootObjectBannersSongPrivilege;
  alg: string;
}
export interface RootObjectBanners {
  pic: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  exclusive: boolean;
  monitorImpressList: any[];
  monitorClickList: any[];
  encodeId: string;
  song: RootObjectBannersSong;
  bannerId: string;
  alg: string;
  scm: string;
  requestId: string;
  showAdTag: boolean;
  s_ctrp: string;
  bannerBizType: string;
}