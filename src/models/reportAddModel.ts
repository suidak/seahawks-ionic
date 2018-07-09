import { client } from './user';
import { reportLocalisation } from './reportLocalisation';
import { User } from './../providers/user/user';
export class reportAddModel {
    public id : number;    
    public title : string;
    public profilePic : string;    
    public description : string;
    public localisation : reportLocalisation;
    public reporterUser : client;
    public isClosed : boolean;

		
		  constructor() {
			
		
		  }
		

    
    }
    