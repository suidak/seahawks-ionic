import { Fundraiser } from './../../models/fundraiser';
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';


@Injectable()
export class DonationService{
    constructor(private http: Http){}

    private base : string = 'http://127.0.0.1:18080/seahawks-web/rest/donation';
    private encHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    
    donate(token,name,amount,fid,mid){
        //let body = username=${username}&password=${password};
        let body = `token=${token}&name=${name}&amount=${amount}&fid=${fid}&mid=${mid}`;
        return this.http.post(this.base+"/donate", body, { headers: this.encHeaders });
    }
    

}