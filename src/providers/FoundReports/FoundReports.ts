import { Headers, Http ,RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { reportAddModel } from './../../models/reportAddModel';
import { FoundReport } from './../../models/FoundReport';
import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { reportReview } from '../../models/reportReview';


@Injectable()
export class FoundReports {
  foundReports: FoundReport [] = [];
  constructor(public api: Api,public httpc: HttpClient , private http : Http) { 
    this.query().subscribe(resp=>{
      this.foundReports=(resp);
    });
  }

  query(params?: any) {
    return this.api.get('FoundReport/AllFoundReports', params);
  }
  queryClosed(params?: any) {
    return this.api.get('FoundReport/AllClosedFoundReports', params);
  }
  queryUrgent(params?: any) {
    return this.api.get('FoundReport/OpenFoundReports', params);
  }
  querySearch(params?: any) {
    if (!params) {
      return this.foundReports;
    }
    
    return this.foundReports.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }
  add(item: reportAddModel) {
    return this.httpc.post(Api.url+'/FoundReport',item);
  }
  addReviewprovider(review) {
    console.log(review);
    let headers = new Headers({'Content-Type' : 'application/json'} );
    let options = new RequestOptions({headers: headers})

    return this.http.post(Api.url+'/reviews/addFoundReview',review , options);
  }
  upload(imageItem : any){
    /*let imagename : string;
    this.api.postUpload('uploadImage',imageItem).subscribe(res => { 
      imagename = res;
    })
    return imagename;*/
    let data : FormData  = new FormData();
    data.append("file",imageItem);
    
    return this.httpc.post(Api.url+"/FoundReport/uploadImage",data);
  }
  uploaddata(imageItem : any){
    console.log("fawzi");
    let headers = new Headers({'Content-Type' : 'application/json'} );
    let options = new RequestOptions({headers: headers})
    let data = {"imagedata":imageItem};
    console.log(data);
    return this.http.post(Api.url+'/FoundReport/uploadImageData',data,options);
   
  }
  rightAnswer(review : number){
    console.log("reviw right answer");
    let headers = new Headers({'Content-Type' : 'application/json'} );
    let options = new RequestOptions({headers: headers})
    let data = {"review":review};
    console.log(data);
    return this.http.post(Api.url+'/reviews/FoundReportRightAnswer',data,options);
   
  }
  
  queryReviews(params?: any) {
    return this.api.get('reviews/ShowFoundReview', params);
  }
  delete(item: FoundReport) {
  }

}
