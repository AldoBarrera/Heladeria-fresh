var mongoose = require('mongoose');
export class CommonModel {
    name: string;
    model: any;
    namePref: string;
    keyName:string;
    constructor() {
        
    }

    async find(query, options) {
        let data ;
        if(options && options.populate)
            data = await this.findAndPopulate(options.populate);
        else if(options && options.restrict) {
            data = await this.model.find({}, options.restrict);
        } else if (query && Object.keys(query).length > 0) {
            data = await this.model.find(query);
        } else
            data = await this.model.find();
        return data
    }

    async findById(dataId, options) {
        let data;
        if(options && options.populate)
            data = await this.model.findById(dataId).populate(options.populate);
        else
            data = await this.model.findById(dataId);
        return data
    }

    async findOne(query:any) {
        let data = await this.model.findOne(query);
        return data
    }
    async GetLastRecords(limit:any) {
        const dataResponse = await this.model.find().sort({_id:-1}).limit(limit);
        return dataResponse; 
    }

    async GetLastRecord(limit:any) {
        const dataResponse = await this.model.findOne().sort({_id:-1});
        return dataResponse; 
    }
    async update(query, data, object) {    
        let dataUpdate = await this.model.update(query, data, object);
        return dataUpdate;
    }

    async create(data) {    
		let dataCreated =  this.model.create(data);      
        return dataCreated;
    }

    async deleteOne(query) {    
        const dataResponse = this.model.deleteOne(query);     
        return dataResponse;
    }

    paths() {       
        return this.model.schema.paths;
    }

    instance(path) {    
        
        return this.model.schema.paths[path].instance;
    }

    getPopulateFields(){
        let populate = "";
        for (let path in this.paths())  {            
            if ((path != 'id') && (path != '_id') && (path != '__v')  && (this.instance(path) == "ObjectID"))
              populate = populate + path + " ";
        }   
        return populate; 
    }

    async findByIdAndPopulate(dataId: string, populate:string) {
        let data = await this.model.findById(dataId).populate(populate);
        return data;
    }
    async findAndPopulate(populate:string) {
        let data = await this.model.find().populate(populate);
        return data
    }

    generateKey() {
        return mongoose.Types.ObjectId();
    }

    

    
}
