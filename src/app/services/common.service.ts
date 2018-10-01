import { Injectable } from '@angular/core';

let vault={};
@Injectable({
  providedIn: 'root'
})
export class CommonService {

	constructor() { };
	
	public getData(data){
		return vault[data];
	};
	
	public setData(key,value){
		vault[key]=value;
	};
}
