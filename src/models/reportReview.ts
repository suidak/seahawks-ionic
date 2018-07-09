import { reportAddModel } from './reportAddModel';
import { DateTime } from "ionic-angular/components/datetime/datetime";
import { client } from "./user";

export class reportReview {
    
    public id : number;
    public content : string;
    public reviewDate : DateTime;
    public reviewer : client;
    public foundReport : reportAddModel;
    public correctAnswer: boolean;
    
		
		  constructor() {
			
		
		  }
		

    
    }
    