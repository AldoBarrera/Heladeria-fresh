var mongoose = require('mongoose');

export class CommonComponent {
    name: string;
    modelDb: any;
    namePref: string;
    keyName: string;
    constructor() {
        
    }

    async GetAllData() {        
        const dataResponse = await this.modelDb.find();
        return dataResponse;
    }

    async GetPopulateData() {   
        var populate = this.modelDb.getPopulateFields();       
        const dataResponse = await this.modelDb.find({},{populate:populate});
        return dataResponse;
    }

    async GetAllRestrictData(restrict: any) {        
        const dataResponse = await this.modelDb.find({}, {restrict:restrict});
        return dataResponse;
    }

    async GetPopulateDataById(dataId: any) {
        var populate = this.modelDb.getPopulateFields(); 
        const dataResponse = await this.modelDb.findById(dataId, {populate:populate});
        return dataResponse;
    }

    async GetDataById(dataId: any) {        
        const dataResponse = await this.modelDb.findById(dataId);
        return dataResponse;
    }

    async InsertData(data: any) {
	    let key = data[this.modelDb.keyName];
        data[this.modelDb.keyName] = !key || key == "" ? this.modelDb.generateKey():key;
        const dataResponse = await this.modelDb.create(data);
        return dataResponse;
    }

    async UpdateData(query:any, update:any) {
        const dataResponse = await this.modelDb.update(query, update, {});
        return dataResponse; 
    }

    async FindData(query:any) {
        const dataResponse = await this.modelDb.find(query);
        return dataResponse; 
    }

    async FindOne(query:any) {
        const dataResponse = await this.modelDb.findOne(query);
        return dataResponse; 
    }

    async GetLastRecords(limit:any) {
        const dataResponse = await this.modelDb.GetLastRecords(limit);
        return dataResponse; 
    }

    async GetLastRecord() {
        const dataResponse = await this.modelDb.GetLastRecord();
        return dataResponse; 
    }
    async DeleteData(query:any) {
        const dataResponse = this.modelDb.deleteOne(query);
        return dataResponse; 
    }
}
