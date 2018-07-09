import { FoundReport } from './../../models/FoundReport';
import { Injectable } from '@angular/core';


@Injectable()
export class FoundReports {
  foundReports: FoundReport[] = [];



  constructor() {

  }

  query(params?: any) {
    if (!params) {
      return this.foundReports;
    }

    return this.foundReports.filter((foundReport) => {
      for (let key in params) {
        let field = foundReport[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return foundReport;
        } else if (field == params[key]) {
          return foundReport;
        }
      }
      return null;
    });
  }

  add(foundReport: FoundReport) {
    this.foundReports.push(foundReport);
    console.log(foundReport);
  }

  delete(foundReport: FoundReport) {
    this.foundReports.splice(this.foundReports.indexOf(foundReport), 1);
  }
}
