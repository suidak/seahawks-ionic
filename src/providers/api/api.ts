import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';
import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  public static url: string = 'http://192.168.1.4:18080/seahawks-web/rest';
  public static storageurl : string ='http://192.168.1.4:18080/seahawks-web/';
 // public static url: string = 'http://localhost:18080/seahawks-web/rest/FoundReport';
  
  constructor(public http: Http , public httpc : HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    console.log(params);
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
      return this.http.get(Api.url + '/' + endpoint+'/'+params, reqOpts).map(resp=>resp.json());      
    }

    return this.http.get(Api.url + '/' + endpoint, reqOpts).map(resp=>resp.json());
  }
  postUpload(endpoint:string,body:any){
    return this.httpc.post<any>(Api.url + '/' + endpoint, body, { headers: new HttpHeaders().append('content-type', 'multipart/form-data').append('accept','*/*') });
  }
  post(body: any, reqOpts?: any) {
      console.log(body);
      this.httpc.post<any>(Api.url, body, { responseType: 'text/html' as 'json' }).subscribe(res => console.log('ok'),err=> {console.log(err)});
      
    
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(Api.url + '/' + endpoint, body, reqOpts);
  }
  poste(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(Api.url + '/' + endpoint, body, reqOpts);
  }
  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(Api.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(Api.url + '/' + endpoint, body, reqOpts);
  }
}
