import { Injectable } from '@angular/core';
import { IEmp } from '../model/emp';
import { Http, Response }  from '@angular/http'; // Service HTTP
//import { Observable }  from 'rxjs'; // Service HTTP
//import 'rxjs/add/operator/map'; // Service HTTP
//import 'rxjs/add/operator/catch'; // Service HTTP // Service HTTP Error handeling
//import { Subject } from 'rxjs/Subject';

@Injectable()
export class EmpService{
	
//	private subject = new Subject<any>();
//
//    constructor (private _http: Http){
//      //this._http 
//    }
// 
//    sendMessage(message: string) {
//        this.subject.next({ text: message });
//    }
// 
//    clearMessage() {
//        this.subject.next();
//    }
// 
//    getMessage(): Observable<any> {
//        return this.subject.asObservable();
//    }
//
//// getting result from HTTP 
// getEmplopee(): Observable<IEmp[]>{
//    return this._http.get("http://www.test.com/123")
//    .map((response: Response )=> <IEmp[]>response.json())
//    .catch(this.handelError);
// }
//
//  getEmplopeeByCode(empCode: string): Observable<IEmp>{
//    return this._http.get("http://www.test.com/123" + empCode)
//    .map((response: Response )=> <IEmp>response.json())
//    .catch(this.handelError);
// }
//
//  handelError(error: Response){
//    console.error(error);
//    return Observable.throw(error);
//  }



  getEmp(): IEmp[]{
    return [{code:"emp101", name:"Prasad", gender:"Male", salary:10000, dateOfBirth:"07/11/1986"},
                  {code:"emp102", name:"Nikhil", gender:"Male", salary:7000, dateOfBirth:"01/06/1986"},
                  {code:"emp103", name:"Rani", gender:"Female", salary:6000, dateOfBirth:"02/06/1986"},
                  {code:"emp104", name:"Manoj", gender:"Male", salary:5500, dateOfBirth:"03/06/1986"},
                  {code:"emp105", name:"Anu", gender:"Female", salary:5400, dateOfBirth:"04/06/1986"},
                  {code:"emp106", name:"Chetan", gender:"Male", salary:5300, dateOfBirth:"05/06/1986"},
                  {code:"emp107", name:"Preeti", gender:"Female", salary:5200, dateOfBirth:"06/06/1986"}, 
                  {code:"emp108", name:"Gauri", gender:"Female", salary:9200, dateOfBirth:"09/09/1988"}];
  }
	
}