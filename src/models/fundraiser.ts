import { Fundonation } from './fundonation';
import { client } from './user';

export class Fundraiser{
    constructor (
        public id?:number, 
        public startDate?:Date,
        public endDate?:Date,
        public title?:string,
        public goal?:number,
        public description?:string,
        public state?:boolean,
        public collectedDonations?:number,
        public launcher?:client,
        //public donations?:Fundonation[],
        public location?:string
    )
        {}
}