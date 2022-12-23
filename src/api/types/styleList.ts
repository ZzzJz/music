export interface RootObject {
	data: RootObjectData[];
	code: number;
}
export interface RootObjectDataChildrenTagsChildrenTags {
	tagId: number;
	tagName: string;
	enName: string;
	level: number;
	picUrl: string;
	colorDeep: string;
	colorShallow: string;
	link: string;
	showText: string;
}
export interface RootObjectDataChildrenTags {
	tagId: number;
	tagName: string;
	enName: string;
	level: number;
	childrenTags: RootObjectDataChildrenTagsChildrenTags[];
	picUrl: string;
	colorDeep: string;
	colorShallow: string;
	link: string;
	showText: string;
}
export interface RootObjectData {
	tagId: number;
	tagName: string;
	enName: string;
	level: number;
	childrenTags: RootObjectDataChildrenTags[];
	picUrl: string;
	colorDeep: string;
	colorShallow: string;
	link: string;
	showText: string;
}