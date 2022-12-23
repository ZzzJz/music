export interface RootObject {
	hasTaste: boolean;
	code: number;
	category: number;
	result: RootObjectResult[];
}
export interface RootObjectResult {
	id: number;
	type: number;
	name: string;
	copywriter: string;
	picUrl: string;
	canDislike: boolean;
	trackNumberUpdateTime: number;
	playCount: number;
	trackCount: number;
	highQuality: boolean;
	alg: string;
	playCountF?:number|string;
}